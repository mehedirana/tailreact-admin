import React, { useRef, useEffect } from 'react';

const ClickOutside = ({
    children,
    exceptionRef,
    onClick,
    className,
}) => {
    // Create a reference for the wrapper div
    const wrapperRef = useRef(null);

    useEffect(() => {
        // Define the event handler for checking click outside
        const handleClickListener = (event) => {
            let clickedInside = false;

            // Check if click is inside wrapperRef or exceptionRef
            if (exceptionRef) {
                clickedInside =
                    (wrapperRef.current && wrapperRef.current.contains(event.target)) ||
                    (exceptionRef.current && exceptionRef.current === event.target) ||
                    (exceptionRef.current && exceptionRef.current.contains(event.target));
            } else {
                clickedInside = wrapperRef.current && wrapperRef.current.contains(event.target);
            }

            // If the click is outside, call the onClick function
            if (!clickedInside) onClick();
        };

        // Add the event listener
        document.addEventListener('mousedown', handleClickListener);

        // Remove the event listener on cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickListener);
        };
    }, [exceptionRef, onClick]);

    // Render the component
    return (
        <div ref={wrapperRef} className={className || ''}>
            {children}
        </div>
    );
};

export default ClickOutside;
