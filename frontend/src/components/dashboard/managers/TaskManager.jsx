import PropTypes from "prop-types";

import TaskList from "../lists/TaskList";

const TaskManager = ({ folderId }) => {

  return (
    <TaskList folderId={folderId} />
  );
}

TaskManager.propTypes = {
  folderId: PropTypes.string.isRequired,
};

export default TaskManager;