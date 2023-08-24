import { DragDropContext } from 'react-beautiful-dnd'
import { useBoardAction } from './useBoardAction'
import { BoardColumnList } from './BoardColumnList'
import './style.css'
import TaskFilter from '@/features/TaskFilter'
export const SIDEBAR_WIDTH = 308

export const Board = () => {
  const { onDragEnd } = useBoardAction()
  return (
    <div className="">
      <TaskFilter />
      <div
        className="board-wrapper"
        style={{ width: `calc(100vw - ${SIDEBAR_WIDTH}px)`, height: `calc(100vh - 125px)` }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <BoardColumnList />
        </DragDropContext>
      </div>
    </div>
  )
}