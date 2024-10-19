type Props = {
    onClick: () => void;
}

export const AddButton = ({onClick}: Props) => {
    return (
        <button onClick={onClick}>Add</button>
    )
}