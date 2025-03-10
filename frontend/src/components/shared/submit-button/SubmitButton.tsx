import SubmitBtnContainer from './submit-button.styles';

interface SubmitButtonProps {
    disable?: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

const SubmitButton = ({ disable, onClick, children }: SubmitButtonProps) => {
    return (
        <SubmitBtnContainer
            type="button"
            className={disable ? 'disable' : ''}
            onClick={onClick}
        >
            {children}
        </SubmitBtnContainer>
    );
};

export default SubmitButton;
