import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

interface ModalProps {
	show: boolean;
	onClose: any;
	children: ReactNode;
	title: string;
}

export default function Modal({
	show,
	onClose,
	children,
	title = "modal",
}: ModalProps) {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	function handleCloseClick(event: React.MouseEvent<HTMLAnchorElement>) {
		event.preventDefault();
		onClose();
	}

	const modalContent = show ? (
		<div className={styles.modalOverlay}>
			<div className={styles.modal}>
				<div className={styles.modalHeader}>
					<a href="#" onClick={handleCloseClick}>
						x
					</a>
				</div>
				{title && <div className={styles.modalTitle}>{title}</div>}
				<div className={styles.modalBody}>{children}</div>
			</div>
		</div>
	) : null;

	if (isBrowser) {
		return createPortal(modalContent, document.getElementById("modal-root")!);
	} else {
		return null;
	}
}
