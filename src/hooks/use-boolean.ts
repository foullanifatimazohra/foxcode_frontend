"use client";

import { useCallback, useState, Dispatch, SetStateAction } from "react";

// ----------------------------------------------------------------------

interface UseBooleanReturn {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  onTrue: () => void;
  onFalse: () => void;
  onToggle: () => void;
}

export function useBoolean(defaultValue = false): UseBooleanReturn {
  const [value, setValue] = useState(!!defaultValue);

  const onTrue = useCallback(() => {
    setValue(true);
  }, []);

  const onFalse = useCallback(() => {
    setValue(false);
  }, []);

  const onToggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return {
    value,
    onTrue,
    onFalse,
    onToggle,
    setValue,
  };
}
