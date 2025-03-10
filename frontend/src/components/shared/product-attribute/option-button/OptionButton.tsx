import { OptionBtnType } from '../../../../types/optionBtnType';
import { TextButton, ColorButton, CounterButton } from './option-button.styles';

interface OptionButtonProps {
    type: OptionBtnType | 'counter';
    value?: string;
    children?: React.ReactNode;
    selected?: boolean;
    isClickable?: boolean;
    counterType?: 'increase' | 'decrease';
    onClick?: () => void;
}

const OptionButton = ({
    type,
    value,
    children,
    selected,
    isClickable,
    counterType,
    onClick,
}: OptionButtonProps) => {
    switch (type) {
        case OptionBtnType.TEXT:
            return (
                <TextButton
                    className={`${selected ? 'selected' : ''} ${isClickable ? 'clickable' : ''}`}
                    onClick={onClick}
                >
                    <span>{children}</span>
                </TextButton>
            );
        case OptionBtnType.SWATCH:
            return (
                <ColorButton
                    className={`${selected ? 'selected' : ''} ${isClickable ? 'clickable' : ''}`}
                    style={{ backgroundColor: value }}
                    onClick={onClick}
                />
            );
        case 'counter':
            return (
                <CounterButton
                    className={counterType === 'increase' ? 'increase' : ''}
                    onClick={onClick}
                >
                    <span></span>
                    <span></span>
                </CounterButton>
            );
    }
};

export default OptionButton;
