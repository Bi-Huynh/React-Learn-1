import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmitForm: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmitForm: null,
};

function PostFilterForm(props) {
    const { onSubmitForm } = props;
    const [postValue, setPostValue] = useState('');
    const typingTimeoutRef = useRef(null);
    // useRef thì nó sẽ lưu lại giá trị của thằng typingTimeoutRef
    // giúp giá trị của nó không bị mất đi sau mỗi lần render lại page

    const handleSubmitFromFilter = (event) => {
        let value = event.target.value;
        setPostValue(value);

        if (!onSubmitForm) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            let valueForm = {
                q: value,
            };
            onSubmitForm(valueForm);
        }, 300);
    };

    return (
        <div>
            <h2>Page Post List</h2>
            <from>
                <input
                    type="text"
                    value={postValue}
                    onChange={handleSubmitFromFilter}
                />
            </from>
        </div>
    );
}

export default PostFilterForm;
