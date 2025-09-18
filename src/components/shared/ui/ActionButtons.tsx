"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { CloudLightning } from "lucide-react";
import { ReactNode } from "react";

interface ActionButtonsProps {
  onClick?: () => void;
  onIconClick?: () => void;
  title: string;
  icon: ReactNode;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onClick,
  title,
  icon,
}) => {
  return (
    <div
      className="flex flex-row items-center group  relative cursor-pointer"
      onClick={onClick}
    >
      {/* Text Button */}
      <Button
        size="lg"
        variant="outline"
        className="cursor-pointer backdrop-blur-2xl"
      >
        {title}
      </Button>

      {/* Animated Icon Button */}
      <motion.div
        initial={{ x: 0, zIndex: 10 }}
        animate={{ x: 0 }}
        layout
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="transition-transform duration-500 "
      >
        <Button
          variant="default"
          size="icon"
          className="relative cursor-pointer"
        >
          {icon}
        </Button>
      </motion.div>
    </div>
  );
};
