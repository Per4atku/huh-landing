import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

const IMAGE_SCALE = 0.8;

export default function BackgroundElements() {
  const containerRef = useRef(null);

  // RAW motion values (the single source of truth) — updated explicitly onDrag
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

  // smooth springs that follow RAW values (these are used for visuals)
  const SPRING_CONFIG = { stiffness: 110, damping: 20 };
  const prodX = useSpring(prodRawX, SPRING_CONFIG);
  const prodY = useSpring(prodRawY, SPRING_CONFIG);

  const remindersX = useSpring(remindersRawX, SPRING_CONFIG);
  const remindersY = useSpring(remindersRawY, SPRING_CONFIG);
  const myRemindersX = useSpring(myRemindersRawX, SPRING_CONFIG);
  const myRemindersY = useSpring(myRemindersRawY, SPRING_CONFIG);

  const pomodoroX = useSpring(pomodoroRawX, SPRING_CONFIG);
  const pomodoroY = useSpring(pomodoroRawY, SPRING_CONFIG);
  const clockX = useSpring(clockRawX, SPRING_CONFIG);
  const clockY = useSpring(clockRawY, SPRING_CONFIG);

  const integrationsX = useSpring(integrationsRawX, SPRING_CONFIG);
  const integrationsY = useSpring(integrationsRawY, SPRING_CONFIG);

  // coupling strength (how strongly follower moves toward leader)
  const COUPLING = 0.08;
  const dragging = useRef(null);

  const setGlobalCursor = (isGrabbing) => {
    try {
      document.body.style.cursor = isGrabbing ? "grabbing" : "";
    } catch (e) {}
  };

  // TWO-WAY coupling (operate on RAW motion values)
  remindersRawX.onChange(() => {
    if (dragging.current === "myReminders") return;
    const leader = remindersRawX.get();
    const follower = myRemindersRawX.get();
    myRemindersRawX.set(follower + (leader - follower) * COUPLING);
  });
  remindersRawY.onChange(() => {
    if (dragging.current === "myReminders") return;
    const leader = remindersRawY.get();
    const follower = myRemindersRawY.get();
    myRemindersRawY.set(follower + (leader - follower) * COUPLING);
  });

  myRemindersRawX.onChange(() => {
    if (dragging.current === "reminders") return;
    const leader = myRemindersRawX.get();
    const follower = remindersRawX.get();
    remindersRawX.set(follower + (leader - follower) * COUPLING);
  });
  myRemindersRawY.onChange(() => {
    if (dragging.current === "reminders") return;
    const leader = myRemindersRawY.get();
    const follower = remindersRawY.get();
    remindersRawY.set(follower + (leader - follower) * COUPLING);
  });

  pomodoroRawX.onChange(() => {
    if (dragging.current === "clock") return;
    const leader = pomodoroRawX.get();
    const follower = clockRawX.get();
    clockRawX.set(follower + (leader - follower) * COUPLING);
  });
  pomodoroRawY.onChange(() => {
    if (dragging.current === "clock") return;
    const leader = pomodoroRawY.get();
    const follower = clockRawY.get();
    clockRawY.set(follower + (leader - follower) * COUPLING);
  });

  clockRawX.onChange(() => {
    if (dragging.current === "pomodoro") return;
    const leader = clockRawX.get();
    const follower = pomodoroRawX.get();
    pomodoroRawX.set(follower + (leader - follower) * COUPLING);
  });
  clockRawY.onChange(() => {
    if (dragging.current === "pomodoro") return;
    const leader = clockRawY.get();
    const follower = pomodoroRawY.get();
    pomodoroRawY.set(follower + (leader - follower) * COUPLING);
  });

  // IMPORTANT: framer-motion's native drag won't update our RAW values
  // if we attach springs directly to the motion.div. To fix reliability,
  // we update RAW values manually in onDrag using info.delta — then springs
  // follow those RAW values. This ensures coupling always sees live changes.
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
        dragMomentum={true}
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
        dragMomentum={true}
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
