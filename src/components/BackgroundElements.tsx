// BackgroundElements.jsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

const IMAGE_SCALE = 0.8;

// visual springs for most elements
const SPRING_CONFIG = { stiffness: 110, damping: 20 };

// a slightly heavier (more damped) spring for the pomodoro <-> clock pair
const POM_CLOCK_SPRING = { stiffness: 100, damping: 26 };

// default coupling strength (fraction of delta to nudge follower)
const DEFAULT_COUPLING = 0.08;
// weaker coupling specifically for pomodoro <-> clock
const POM_CLOCK_COUPLING = 0.05;

// ignore tiny differences under this threshold (pixels)
const COUPLING_DEADZONE = 0.6;

// optional safety clamp: if leader-follower distance is huge, jump follower closer
const MAX_JUMP_DISTANCE = 220;

function useCoupling({
  leader,
  follower,
  draggingRef,
  blockedWhenDraggingName,
  coupling = DEFAULT_COUPLING,
  deadzone = COUPLING_DEADZONE,
  maxJump = MAX_JUMP_DISTANCE,
}) {
  useEffect(() => {
    const unsub = leader.onChange(() => {
      if (draggingRef.current === blockedWhenDraggingName) return;
      const L = leader.get();
      const F = follower.get();
      const delta = L - F;

      // deadzone: ignore tiny differences to avoid micro-jitter
      if (Math.abs(delta) < deadzone) return;

      // if distance is enormous, move follower closer in a single jump
      if (Math.abs(delta) > maxJump) {
        const target = L - Math.sign(delta) * (maxJump * 0.5); // land somewhat close
        follower.set(target);
        return;
      }

      follower.set(F + delta * coupling);
    });

    return () => {
      if (typeof unsub === "function") unsub();
    };
  }, [
    leader,
    follower,
    draggingRef,
    blockedWhenDraggingName,
    coupling,
    deadzone,
    maxJump,
  ]);
}

export default function BackgroundElements() {
  const containerRef = useRef(null);
  const dragging = useRef(null);

  // RAW motion values
  const prodRawX = useMotionValue(0);
  const prodRawY = useMotionValue(0);

  const remindersRawX = useMotionValue(0);
  const remindersRawY = useMotionValue(0);
  const myRemindersRawX = useMotionValue(0);
  const myRemindersRawY = useMotionValue(0);

  const pomodoroRawX = useMotionValue(0);
  const pomodoroRawY = useMotionValue(0);
  const clockRawX = useMotionValue(0);
  const clockRawY = useMotionValue(0);

  const integrationsRawX = useMotionValue(0);
  const integrationsRawY = useMotionValue(0);

  // smooth springs that follow RAW values (used for visuals)
  const prodX = useSpring(prodRawX, SPRING_CONFIG);
  const prodY = useSpring(prodRawY, SPRING_CONFIG);

  const remindersX = useSpring(remindersRawX, SPRING_CONFIG);
  const remindersY = useSpring(remindersRawY, SPRING_CONFIG);
  const myRemindersX = useSpring(myRemindersRawX, SPRING_CONFIG);
  const myRemindersY = useSpring(myRemindersRawY, SPRING_CONFIG);

  // use a slightly heavier spring for pomodoro <-> clock pair
  const pomodoroX = useSpring(pomodoroRawX, POM_CLOCK_SPRING);
  const pomodoroY = useSpring(pomodoroRawY, POM_CLOCK_SPRING);
  const clockX = useSpring(clockRawX, POM_CLOCK_SPRING);
  const clockY = useSpring(clockRawY, POM_CLOCK_SPRING);

  const integrationsX = useSpring(integrationsRawX, SPRING_CONFIG);
  const integrationsY = useSpring(integrationsRawY, SPRING_CONFIG);

  // Couplings
  // reminders <-> myReminders (two-way, default coupling)
  useCoupling({
    leader: remindersRawX,
    follower: myRemindersRawX,
    draggingRef: dragging,
    blockedWhenDraggingName: "myReminders",
    coupling: DEFAULT_COUPLING,
  });
  useCoupling({
    leader: remindersRawY,
    follower: myRemindersRawY,
    draggingRef: dragging,
    blockedWhenDraggingName: "myReminders",
    coupling: DEFAULT_COUPLING,
  });
  useCoupling({
    leader: myRemindersRawX,
    follower: remindersRawX,
    draggingRef: dragging,
    blockedWhenDraggingName: "reminders",
    coupling: DEFAULT_COUPLING,
  });
  useCoupling({
    leader: myRemindersRawY,
    follower: remindersRawY,
    draggingRef: dragging,
    blockedWhenDraggingName: "reminders",
    coupling: DEFAULT_COUPLING,
  });

  // pomodoro <-> clock (two-way, weaker coupling & deadzone applied)
  useCoupling({
    leader: pomodoroRawX,
    follower: clockRawX,
    draggingRef: dragging,
    blockedWhenDraggingName: "clock",
    coupling: POM_CLOCK_COUPLING,
  });
  useCoupling({
    leader: pomodoroRawY,
    follower: clockRawY,
    draggingRef: dragging,
    blockedWhenDraggingName: "clock",
    coupling: POM_CLOCK_COUPLING,
  });
  useCoupling({
    leader: clockRawX,
    follower: pomodoroRawX,
    draggingRef: dragging,
    blockedWhenDraggingName: "pomodoro",
    coupling: POM_CLOCK_COUPLING,
  });
  useCoupling({
    leader: clockRawY,
    follower: pomodoroRawY,
    draggingRef: dragging,
    blockedWhenDraggingName: "pomodoro",
    coupling: POM_CLOCK_COUPLING,
  });

  // helper to set global cursor
  const setGlobalCursor = (isGrabbing) => {
    try {
      document.body.style.cursor = isGrabbing ? "grabbing" : "";
    } catch (e) {
      // ignore (SSR, testing, etc.)
    }
  };

  // we manually increment RAW values with info.delta to keep coupling reliable
  const handleDrag = (rawX, rawY) => (event, info) => {
    rawX.set(rawX.get() + info.delta.x);
    rawY.set(rawY.get() + info.delta.y);
  };

  return (
    <div className="absolute inset-0 pointer-events-none" ref={containerRef}>
      {/* productivity graph */}
      <motion.div
        drag
        dragConstraints={containerRef}
        dragMomentum={true}
        dragElastic={0.18}
        style={{ x: prodX, y: prodY, top: 48, left: 48, rotate: "-6deg" }}
        className="absolute cursor-grab pointer-events-auto active:cursor-grabbing"
        whileTap={{ scale: 0.98 }}
        onDragStart={() => {
          dragging.current = "productivity";
          setGlobalCursor(true);
        }}
        onDrag={(e, info) => handleDrag(prodRawX, prodRawY)(e, info)}
        onDragEnd={() => {
          dragging.current = null;
          setGlobalCursor(false);
        }}
      >
        <Image
          src="/bg-elements/productivity-graph.png"
          alt="productivity graph"
          width={277 * IMAGE_SCALE}
          height={241 * IMAGE_SCALE}
          priority
          draggable={false}
        />
      </motion.div>

      {/* reminders <-> myReminders */}
      <motion.div
        drag
        dragConstraints={containerRef}
        dragMomentum={true}
        dragElastic={0.22}
        style={{
          x: remindersX,
          y: remindersY,
          top: 220 * IMAGE_SCALE,
          right: 300 * IMAGE_SCALE,
          zIndex: 10,
          rotate: "-12deg",
        }}
        className="absolute pointer-events-auto cursor-grab active:cursor-grabbing"
        whileTap={{ scale: 0.98 }}
        onDragStart={() => {
          dragging.current = "reminders";
          setGlobalCursor(true);
        }}
        onDrag={(e, info) => handleDrag(remindersRawX, remindersRawY)(e, info)}
        onDragEnd={() => {
          dragging.current = null;
          setGlobalCursor(false);
        }}
      >
        <Image
          src="/bg-elements/reminders.png"
          alt="reminders small"
          width={90 * IMAGE_SCALE}
          height={90 * IMAGE_SCALE}
          priority
          draggable={false}
        />
      </motion.div>

      <motion.div
        drag
        dragConstraints={containerRef}
        dragMomentum={true}
        dragElastic={0.18}
        style={{
          x: myRemindersX,
          y: myRemindersY,
          top: 8 * IMAGE_SCALE,
          right: 24 * IMAGE_SCALE,
          rotate: "8deg",
        }}
        className="absolute pointer-events-auto cursor-grab active:cursor-grabbing"
        whileTap={{ scale: 0.98 }}
        onDragStart={() => {
          dragging.current = "myReminders";
          setGlobalCursor(true);
        }}
        onDrag={(e, info) =>
          handleDrag(myRemindersRawX, myRemindersRawY)(e, info)
        }
        onDragEnd={() => {
          dragging.current = null;
          setGlobalCursor(false);
        }}
      >
        <Image
          src="/bg-elements/my-reminders.png"
          alt="my reminders"
          width={317 * IMAGE_SCALE}
          height={317 * IMAGE_SCALE}
          priority
          draggable={false}
        />
      </motion.div>

      {/* pomodoro <-> clock */}
      <motion.div
        drag
        dragConstraints={containerRef}
        // disable momentum for pomodoro/clock to reduce oscillation
        dragMomentum={false}
        dragElastic={0.2}
        style={{
          x: pomodoroX,
          y: pomodoroY,
          bottom: 20 * IMAGE_SCALE,
          left: 0 * IMAGE_SCALE,
          rotate: "-4deg",
        }}
        className="absolute pointer-events-auto cursor-grab active:cursor-grabbing"
        whileTap={{ scale: 0.98 }}
        onDragStart={() => {
          dragging.current = "pomodoro";
          setGlobalCursor(true);
        }}
        onDrag={(e, info) => handleDrag(pomodoroRawX, pomodoroRawY)(e, info)}
        onDragEnd={() => {
          dragging.current = null;
          setGlobalCursor(false);
        }}
      >
        <Image
          src="/bg-elements/pomodoro.png"
          alt="pomodoro"
          width={317 * IMAGE_SCALE}
          height={317 * IMAGE_SCALE}
          priority
          draggable={false}
        />
      </motion.div>

      <motion.div
        drag
        dragConstraints={containerRef}
        // disable momentum for pomodoro/clock to reduce oscillation
        dragMomentum={false}
        dragElastic={0.22}
        style={{
          x: clockX,
          y: clockY,
          bottom: 130 * IMAGE_SCALE,
          left: 280 * IMAGE_SCALE,
          rotate: "6deg",
        }}
        className="absolute pointer-events-auto cursor-grab active:cursor-grabbing"
        whileTap={{ scale: 0.98 }}
        onDragStart={() => {
          dragging.current = "clock";
          setGlobalCursor(true);
        }}
        onDrag={(e, info) => handleDrag(clockRawX, clockRawY)(e, info)}
        onDragEnd={() => {
          dragging.current = null;
          setGlobalCursor(false);
        }}
      >
        <Image
          src="/bg-elements/clock.png"
          alt="clock"
          width={90 * IMAGE_SCALE}
          height={90 * IMAGE_SCALE}
          priority
          draggable={false}
        />
      </motion.div>

      {/* integrations */}
      <motion.div
        drag
        dragConstraints={containerRef}
        dragMomentum={true}
        dragElastic={0.18}
        style={{
          x: integrationsX,
          y: integrationsY,
          bottom: 10 * IMAGE_SCALE,
          right: 20 * IMAGE_SCALE,
          rotate: "-8deg",
        }}
        className="absolute pointer-events-auto cursor-grab active:cursor-grabbing"
        whileTap={{ scale: 0.98 }}
        onDragStart={() => {
          dragging.current = "integrations";
          setGlobalCursor(true);
        }}
        onDrag={(e, info) =>
          handleDrag(integrationsRawX, integrationsRawY)(e, info)
        }
        onDragEnd={() => {
          dragging.current = null;
          setGlobalCursor(false);
        }}
      >
        <Image
          src="/bg-elements/integrations.png"
          alt="integrations"
          width={317 * IMAGE_SCALE}
          height={317 * IMAGE_SCALE}
          priority
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
