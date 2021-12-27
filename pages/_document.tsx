import Document, { Head, Html, Main, NextScript } from "next/document";

class MainDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
					<div id="modal-root"></div>
				</body>
			</Html>
		);
	}
}

export default MainDocument;
