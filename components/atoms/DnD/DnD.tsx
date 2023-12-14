"use client";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const DnD = ({
  items,
  updateItems,
  droppableId,
  gap = "gap-4",
  box,
}) => {
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const itemsCopy = Array.from(items);
    const [reorderedItem] = itemsCopy.splice(result.source.index, 1);
    itemsCopy.splice(result.destination.index, 0, reorderedItem);

    updateItems(itemsCopy);
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={droppableId}>
          {(provided) => (
            <div
              className={`w-full flex flex-col ${gap}`}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map((item, index) => {
                return (
                  <Draggable
                    key={`${droppableId}_${index}`}
                    draggableId={`${droppableId}_${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="w-full"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {box(item)}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
