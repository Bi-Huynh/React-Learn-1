// @flow
import './Header.css';
import checkAll from '../../../image/icon/check-all.svg';

type Props = {
    onAllComplete: Function,
    onKeyEnter: Function,
};

function TodoHeader(props: Props) {
    const { onAllComplete, onKeyEnter } = props;
    return (
        <div className="card-header">
            <img
                className="img"
                src={checkAll}
                alt="icon down"
                onClick={onAllComplete}
            />
            <input
                className="input"
                name="contentTodo"
                type="text"
                placeholder="What needs to be done ?"
                onKeyUp={onKeyEnter}
            />
        </div>
    );
}

export default TodoHeader;
