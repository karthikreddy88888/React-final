import {useState} from "react";
import {FormControl} from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 1, name: "NodeJS Module",
        description: "Create a NodeJS server with ExpressJS",
        course: "W101"
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    return (
        <div>
            <div id="wd-working-with-objects">
                <h3>Working With Objects</h3>

                <h4>Modifying Properties</h4>

                <div className="mb-3">
                    <a id="wd-update-assignment-title"
                       className="btn btn-primary float-end"
                       href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                        Update Title
                    </a>
                    <FormControl className="w-75" id="wd-assignment-title"
                                 defaultValue={assignment.title}
                                 onChange={(e) =>
                                     setAssignment({...assignment, title: e.target.value})}/>
                </div>

                <div className="mb-3">
                    <a id="wd-update-assignment-score"
                       className="btn btn-primary float-end"
                       href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                        Update Score
                    </a>
                    <FormControl
                        className="w-75"
                        id="wd-assignment-score"
                        type="number"
                        defaultValue={assignment.score}
                        onChange={(e) =>
                            setAssignment({...assignment, score: parseInt(e.target.value) || 0})}
                    />
                </div>

                <div className="mb-3">
                    <a id="wd-update-assignment-completed"
                       className="btn btn-primary float-end"
                       href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                        Update Completed
                    </a>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="wd-assignment-completed"
                            checked={assignment.completed}
                            onChange={(e) =>
                                setAssignment({...assignment, completed: e.target.checked})}
                        />
                        <label className="form-check-label" htmlFor="wd-assignment-completed">
                            Assignment Completed
                        </label>
                    </div>
                </div>

                <hr/>

                <h4>Retrieving Objects</h4>
                <a id="wd-retrieve-assignments" className="btn btn-primary"
                   href={ASSIGNMENT_API_URL}>
                    Get Assignment
                </a>

                <hr/>

                <h4>Retrieving Properties</h4>
                <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                   href={`${ASSIGNMENT_API_URL}/title`}>
                    Get Title
                </a>

                <hr/>
            </div>
            <div id="wd-working-with-modules">
                <h3>Working With Module</h3>

                <h4>Modifying Properties</h4>
                <div className="mb-3">
                    <a id="wd-update-module-name"
                       className="btn btn-primary float-end"
                       href={`${MODULE_API_URL}/name/${module.name}`}>
                        Update Name
                    </a>
                    <FormControl className="w-75" id="wd-module-name"
                                 defaultValue={module.name}
                                 onChange={(e) =>
                                     setModule({...module, name: e.target.value})}/>
                </div>

                <div className="mb-3">
                    <a id="wd-update-module-desc"
                       className="btn btn-primary float-end"
                       href={`${MODULE_API_URL}/description/${module.description}`}>
                        Update Description
                    </a>
                    <FormControl className="w-75" id="wd-module-description"
                                 defaultValue={module.description}
                                 onChange={(e) =>
                                     setModule({...module, description: e.target.value})}/>
                </div>

                <hr/>

                <h4>Retrieving Module</h4>
                <a id="wd-retrieve-modules" className="btn btn-primary"
                   href={MODULE_API_URL}>
                    Get Module
                </a>
                <hr/>
                <h4>Retrieving Properties</h4>
                <a id="wd-retrieve-module-name" className="btn btn-primary"
                   href={`${MODULE_API_URL}/name`}>
                    Get Name
                </a>
                <hr/>
            </div>
        </div>
    );
}