import LoadingContainer from './loading-container.styles';

const Loading = () => {
    return (
        <LoadingContainer>
            <div className="loader">
                <span className="element"></span>
                <span className="element "></span>
                <span className="element"></span>
            </div>
        </LoadingContainer>
    );
};

export default Loading;
