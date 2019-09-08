import React, { useState } from 'react'

const styles = {
    done: {
        color: "pink"
    },
    notDone: {
        color: "green"
    }    
}

const Item = ({ todo }) => {
    const [done, setDone] = useState(false)
    return (
        <div onClick={(e) => setDone(!done)} style={done ? styles.done : styles.notDone}>
            {todo.name}
        </div>
    )
}

export default Item