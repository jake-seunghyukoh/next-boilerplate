import Modal from "@components/modals/modal";
import { useState } from "react";

export default function ModalPage() {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<button onClick={() => setShowModal(true)}>Open Modal</button>
			<Modal
				onClose={() => setShowModal(false)}
				show={showModal}
				title="Modal Title"
			>
				Hello from Modal
			</Modal>
		</div>
	);
}
