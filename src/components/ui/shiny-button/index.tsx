"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useAnimationControls,
  useMotionValue,
} from "framer-motion";

import { Button, Border, ButtonWrapper, Glow, Stars } from "./button.module";

interface Props {
  noStar?: boolean;
  children: React.ReactNode;
  className?: string;
  width: number;
  height: number;
}

export default function ShinyButton(props: Props) {
  const controls = useAnimationControls();
  const turn = useMotionValue("0turn");
  const [duration, setDuration] = useState(6);

  // const buttonRef = useRef();
  const width = props.width || 100;
  const height = props.height || 30;

  useEffect(() => {
    const remaining = Number(turn.get().split("turn")[0]);
    // THIS WILL ONLY WORK WITH LINEAR EASINGS
    const calculated = duration * (1 - remaining);
    // if the turn has been completed start with 0
    const currentTurn = turn.get() === "1turn" ? "0turn" : turn.get();

    controls.stop();
    animate(turn, [currentTurn, "1turn"], {
      duration: calculated || duration,
      ease: "linear",
      onComplete() {
        prepareNextAnimation();
      },
    });
    return controls.stop;
  }, [duration]);

  function prepareNextAnimation() {
    animate(turn, ["0turn", "1turn"], {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
    });
  }

  const target = useRef<null | HTMLDivElement>(null);

  function calculateSpeed(x: number, y: number, maxSpeed = 6, minSpeed = 4) {
    // Pythagorean
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    const speed =
      maxSpeed - (distance / (window.innerWidth / 3)) * (maxSpeed - minSpeed);
    return Math.max(Math.min(speed, maxSpeed), minSpeed);
  }

  function generateSquareMask() {
    const dimensions = width + 50; // safe distance

    return dimensions;
  }

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (target.current) {
        const rect = target.current.getBoundingClientRect();

        const relativeX = event.clientX - rect.x;
        const relativeY = event.clientY - rect.y;

        setDuration(calculateSpeed(relativeX, relativeY));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [target]);

  return (
    <div ref={target}>
      <ButtonWrapper>
        <Border
          as={motion.div}
          animate={controls}
          style={{ "--border-angle": turn } as any}
          size={generateSquareMask()}
          buttonWidth={width}
          buttonHeight={height}
        />
        <Glow
          as={motion.div}
          animate={controls}
          style={{ "--border-angle": turn } as any}
          size={generateSquareMask()}
          buttonWidth={width}
          buttonHeight={height}
        />
        {!props.noStar && (
          <Stars
            as={motion.div}
            animate={controls}
            style={{ "--border-angle": turn } as any}
            size={generateSquareMask()}
            buttonWidth={width}
            buttonHeight={height}
          />
        )}
        <Button className={props?.className}>{props.children}</Button>
      </ButtonWrapper>
    </div>
  );
}
