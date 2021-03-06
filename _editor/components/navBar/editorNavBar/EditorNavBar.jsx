import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import screenfull from 'screenfull';

import GlobalConfig from '../globalConfig/GlobalConfig';
import NavActionButtons from './NavActionButtons.jsx';
import NavDropdown from './NavDropdown.jsx';
import PluginsMenu from './PluginsMenu.jsx';
import ExportModal from '../export/ExportModal';
import StyleConfig from '../styleConfig/StyleConfig';
import { updateUI } from "../../../../common/actions";
import { UI } from "../../../../common/UI.es6";

import { ED, Gradient, IconBar, Logo } from "./Styles";

/**
 * Upper navigation bar component
 */
class EditorNavBar extends Component
{
    state = {
        showExport: false,
        isFullScreenOn: screenfull.isFullscreen,
    };

    render() {
        return (
            <IconBar>
                <Gradient/>
                <Logo><ED/>iphy</Logo>
                <PluginsMenu/>
                <NavActionButtons
                    save={this.props.handleExportImport.save}
                    toggleStyleConfig={this.toggleStyleConfig}
                />
                <NavDropdown
                    save={this.props.handleExportImport.save}
                    toggleExport={this.toggleExport}
                    toggleFileUpload={this.toggleFileUpload}
                />
                <StyleConfig/>
                <GlobalConfig
                    globalConfig={this.props.globalConfig}
                    toggleFileUpload={this.toggleFileUpload}
                />
                <ExportModal
                    export={this.props.handleExportImport.exportResource}
                    scorm={this.props.handleExportImport.exportToScorm}
                    close={this.toggleExport} />
            </IconBar>
        );
    }

    /**
       * Shows/Hides the Export course modal
       */
    toggleExport = () => {
        let newExportState = !this.props.reactUI.showExportModal;
        this.props.dispatch(updateUI(UI.showExportModal, newExportState));
    };
    /**
     * Shows/Hides the StyleConfig modal
     */
    toggleStyleConfig = () => {
        return this.props.dispatch(updateUI({ showStyleConfig: !this.props.reactUI.showStyleConfig }));
    };
    /**
     * Shows/Hides the Import file modal
     */
    toggleFileUpload = (id, accept) => {
        this.props.dispatch(updateUI({
            showFileUpload: accept,
            fileModalResult: { id: id, value: undefined },
            fileUploadTa: 0,
        }));
    };
}

export default connect(mapStateToProps)(EditorNavBar);

function mapStateToProps(state) {
    const { globalConfig } = state.undoGroup.present;
    return {
        globalConfig,
        reactUI: state.reactUI,
    };
}
EditorNavBar.propTypes = {
    /**
     * Redux actions trigger
     */
    dispatch: PropTypes.func,
    /**
     * Object containing the global configuration of the document
     */
    globalConfig: PropTypes.object.isRequired,
    /**
     * React UI params
     */
    reactUI: PropTypes.object.isRequired,
    /**
     * Collection of functions for export and import handling
     */
    handleExportImport: PropTypes.object.isRequired,
};
