import {ChangeEvent, useState} from "react";
import "../components/style.css"
type Props = {
    defaultValue: string,
    onChange: (value: string) => void,
}

// В нипут передаем значение и текст
// value - значение
// onChange - Передаем event handler
export const Input = ({defaultValue, onChange}: Props) => {
    // lableValue - хранит выводимую ошибку
    const [lableValue, setLableValue] = useState("")
    const [inputValue, setInputValue] = useState(defaultValue)
    // функция Которая вызывается
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Принимаем значение из поля input
        const val = event.target.value;
        // Делаем проверку Количества символов
        if(val.length > 32) {
            setLableValue(`Привышена длина заголовка ${val.length}`)
        }else {
            setLableValue("")
            setInputValue(val)
            // Передаем в функцию значение val
            onChange(val)
        }
    }
    return (
        <div className="input-field">
            <label
                htmlFor="input-header-field-id"
                data-testid="input-lable"
            >Введите заголовок</label>
            <input
                id="input-header-field-id"
                placeholder={`например, введите "купите молоко"`}
                type="text"
                aria-hidden={false}
                alt="Поле ввода заголовка задачи"
                title="Поле ввода заголовка"
                onChange={handleChange}
                value={defaultValue}
                data-testid="input-field"
            />
            <span data-testid="hint-text">{lableValue}</span>
        </div>
    )
}