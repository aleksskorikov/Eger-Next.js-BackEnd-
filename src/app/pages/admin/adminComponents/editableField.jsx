// import React, { useState, useEffect } from 'react';
// import styles from "../../../../styles/scss/addProducts.module.scss"

// const EditableField = ({ value, onSave, onCancel }) => {
//     const [newValue, setNewValue] = useState(value);

//     useEffect(() => {
//         setNewValue(value);
//     }, [value]);

//     useEffect(() => {
//         if (newValue !== value) {
//             onSave(newValue);
//         }
//     }, [newValue]);  

//     return (
//         <div className={styles.field}>
//             <textarea
//                 type="text"
//                 value={newValue}
//                 onChange={(e) => setNewValue(e.target.value)}
//                 className={styles.editableInput}
//             />
//         </div>
//     );
// };

// export default EditableField;
import React, { useState, useEffect, useCallback } from "react";
import styles from "../../../../styles/scss/addProducts.module.scss";

const EditableField = ({ value, onSave, onCancel }) => {
    const [newValue, setNewValue] = useState(value);

    useEffect(() => {
        setNewValue(value);
    }, [value]);

    // Используем useCallback, чтобы не вызывать onSave при каждом рендере
    const handleBlur = useCallback(() => {
        if (newValue !== value) {
            onSave(newValue);
        }
    }, [newValue, value, onSave]);

    return (
        <div className={styles.field}>
            <textarea
                type="text"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                onBlur={handleBlur} // ✅ Сохраняем только после ухода из поля
                className={styles.editableInput}
            />
        </div>
    );
};

export default EditableField;
