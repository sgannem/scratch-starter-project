import React from "react";
import Icon from "./Icon";

export default function MidArea() {
  return <div className="flex-1 h-full overflow-auto">
    {"mid area"} 
    <Icon name="brain" size={55} className="text-green-600 mx-2" />
    </div>;
}
