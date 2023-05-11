import { useState, useEffect, useRef } from "react";

function Form() {
    const [newStudent, setNewStudent] = useState('');
    const [students, setStudents] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleFormSubmit = (e) => {
        console.log('submit')
        e.preventDefault();
        setStudents([...students, newStudent]);
        setNewStudent('');
        inputRef.current.focus();
    }

    const handleNewStudent = (event) => {
        setNewStudent(event.target.value);
    }
    return (
        <>
            <section>
                <form onSubmit={handleFormSubmit}>
                    <input 
                        type='text' 
                        placeholder="Enter a name" 
                        onChange={handleNewStudent}
                        value={newStudent}
                        ref={inputRef}
                    />
                    <input type='submit' value='Add student' />
                </form>

                <hr />

                {students.map(student => {
                    return (<div key={crypto.randomUUID()}>
                            {student}
                    </div>)
                })}

            </section>
        </>
    )
}

export default Form