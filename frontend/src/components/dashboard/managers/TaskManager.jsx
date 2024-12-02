import PropTypes from "prop-types";

import TaskList from "../lists/TaskList";

const TaskManager = ({ tasks }) => {

  return (
  <div className="w-full md:w-2/3">
    <div className="space-y-2 mb-4">
      <TaskList tasks={tasks} />
    </div>
  </div>
  )
}

TaskManager.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TaskManager;