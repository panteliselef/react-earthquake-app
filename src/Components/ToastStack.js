import React, { useState, useEffect, useReducer } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function ToastStack(props) {
	const { dispatch, toasts } = props;

	return (
		<ul className="toast-stack">
			<button
				onClick={() =>
					dispatch({
						type: 'UPDATED_TOAST_STACK',
						payload: [
							...toasts,
							{
								type: 'toast',
								value: Math.random()
							}
						]
					})}
			>
				CLick me
			</button>
			{toasts.map((toast, i) => {
				if (i === toasts.length - 1) {
					return (
						<li
							onAnimationEndCapture={() => dispatch({ type: 'UPDATED_TOAST_STACK', payload: [] })}
							className="animated-item"
							key={toast.value}
						>
							{toast.value}
						</li>
					);
				} else {
					return (
						<li className="animated-item" key={toast.value}>
							{toast.value}
						</li>
					);
				}
			})}
		</ul>
	);
}

export default ToastStack;
