import "./ui/PdftronWebviewer.css";
import { Component, createElement, createRef } from "react";
import WebViewer from "@pdftron/webviewer";
import { hot } from "react-hot-loader/root";

class PdftronWebviewer extends Component {
    constructor(props) {
        super(props);
        this.viewer = createRef();
    }

    componentDidMount() {
        WebViewer(
            {
                path: "/public/",
                initialDoc: ""
            },
            this.viewer.current
        ).then(instance => {
            //const { docViewer } = instance;
            // you can now call WebViewer APIs here...
            instance.loadDocument(this.props.file.value.uri, { filename: this.props.fileName.value });
        });
    }

    render() {
        return (
            <div className="MyComponent">
                <div className="header">React sample</div>
                <div className="webviewer" ref={this.viewer} style={{ height: "100vh" }}></div>
            </div>
        );
    }
}

export default hot(PdftronWebviewer);
