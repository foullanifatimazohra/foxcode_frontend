"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { useBoolean } from "@/hooks/use-boolean";
import Button from "@/components/ui/Button";

function Card({ content }: any) {
  const isOpen = useBoolean(false);

  const { question, answer } = content || {};
  return (
    <div className="max-w-[800px] py-8">
      <div className="flex justify-between">
        <h4
          className={`text-[20px] font-semibold ${isOpen.value ? "text-primary-brand-500" : "text-primary-gray-900"}`}
        >
          {question}
        </h4>
        <motion.div whileHover={{ rotate: !isOpen ? 90 : 0 }}>
          <Button
            className="bg-white hover:bg-primary-gray-25 border-none !p-3"
            onClick={isOpen.onToggle}
          >
            {isOpen.value ? (
              <Minus size={20} className="text-black" />
            ) : (
              <Plus size={20} className="text-black" />
            )}
          </Button>
        </motion.div>
      </div>
      {isOpen.value ? (
        <p className="text-primary-gray-700 text-body leading-6">{answer}</p>
      ) : null}
    </div>
  );
}

export default Card;
