import React from 'react';
function ToastStack(props) {
	const { dispatch, toasts } = props;

	return (
		<ul className="toast-stack">
			{toasts.map((toast, i) => {
				console.log(toast);
				if (i === toasts.length - 1) {
					return (
						<li key={toast.timestamp}
							onAnimationEndCapture={() => dispatch({ type: 'UPDATED_TOAST_STACK', payload: [] })}
							className="animated-item"
						>
							{toast.value}
						</li>
					);
				} else {
					return (
						<li key={toast.timestamp} className="animated-item" >
							{toast.value}
						</li>
					);
				}
			})}
		</ul>
	);
}

export default ToastStack;
