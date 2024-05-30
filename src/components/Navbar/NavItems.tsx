"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useRef, useState } from "react";
import NavItem from "./NavItem";
import useHandleClickOutside from "@/hooks/use-handle-click-outside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;
  const subNavRef = useRef<HTMLDivElement | null>(null);

  const closeMenuOnClickOutside = (event: MouseEvent) => {
    if (subNavRef.current && !subNavRef.current.contains(event.target as Node))
      setActiveIndex(null);
  };

  const handleOpen = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log("handleOpen");
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
  };

  useHandleClickOutside(closeMenuOnClickOutside);

  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, index) => {
        const isOpen = index === activeIndex;

        return (
          <NavItem
            subNavRef={subNavRef}
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
