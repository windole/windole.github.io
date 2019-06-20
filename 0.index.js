(window["webpackJsonp"] = window["webpackJsonp"] || []).push([ [ 0 ], {
    "./node_modules/anujs/dist/Rematch.js": function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__("dll-reference _React_DLL_base")("./node_modules/anujs/dist/Rematch.js");
    },
    "./node_modules/react-redux/es/index.js": function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__("dll-reference _React_DLL_base")("./node_modules/react-redux/es/index.js");
    },
    "./src/components/Add.jsx": function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = void 0;
        var _react = _interopRequireDefault(__webpack_require__("./node_modules/anujs/dist/ReactIE.js"));
        var _app = _interopRequireDefault(__webpack_require__("./src/stores/app.js"));
        var _Conf = _interopRequireDefault(__webpack_require__("./src/components/Conf.jsx"));
        var _antd = __webpack_require__("./patchs/antd.js");
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _inheritsLoose(subClass, superClass) {
            subClass.prototype = Object.create(superClass.prototype);
            subClass.prototype.constructor = subClass;
            subClass.__proto__ = superClass;
        }
        var Add = function(_React$PureComponent) {
            _inheritsLoose(Add, _React$PureComponent);
            function Add() {
                var _this;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                _this = _React$PureComponent.call.apply(_React$PureComponent, [ this ].concat(args)) || this;
                _this.state = {
                    visible: false
                };
                _this.data = {};
                return _this;
            }
            var _proto = Add.prototype;
            _proto.render = function render() {
                return _react["default"].createElement(_antd.Modal, {
                    visible: this.state.visible,
                    title: "Add",
                    width: "350px",
                    maskClosable: false,
                    okText: "Save",
                    cancelText: "Cancel",
                    onOk: this.save.bind(this),
                    onCancel: this.close.bind(this)
                }, _react["default"].createElement(_Conf["default"], {
                    onChange: this.onChange.bind(this)
                }));
            };
            _proto.open = function open() {
                this.setState({
                    visible: true
                });
            };
            _proto.close = function close() {
                this.setState({
                    visible: false
                });
            };
            _proto.onChange = function onChange(data) {
                this.data = data;
            };
            _proto.save = function save() {
                _app["default"].dispatch.todoModel.add(this.data);
                _antd.message.success("Added successfully");
            };
            return Add;
        }(_react["default"].PureComponent);
        exports["default"] = Add;
    },
    "./src/components/Conf.jsx": function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = void 0;
        var _react = _interopRequireDefault(__webpack_require__("./node_modules/anujs/dist/ReactIE.js"));
        var _antd = __webpack_require__("./patchs/antd.js");
        var _app = _interopRequireDefault(__webpack_require__("./src/styles/app.css"));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _extends() {
            _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            return _extends.apply(this, arguments);
        }
        function _inheritsLoose(subClass, superClass) {
            subClass.prototype = Object.create(superClass.prototype);
            subClass.prototype.constructor = subClass;
            subClass.__proto__ = superClass;
        }
        var Conf = function(_React$PureComponent) {
            _inheritsLoose(Conf, _React$PureComponent);
            function Conf(props) {
                var _this;
                _this = _React$PureComponent.call(this, props) || this;
                _this.state = {
                    startTime: props.startTime,
                    endTime: props.endTime,
                    content: props.content
                };
                return _this;
            }
            var _proto = Conf.prototype;
            _proto.render = function render() {
                return _react["default"].createElement("table", {
                    className: _app["default"]["Conf__table"]
                }, _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "Start Time:"), _react["default"].createElement("td", null, _react["default"].createElement(_antd.DatePicker, {
                    value: this.state.startTime,
                    onChange: this.onChangeStartTime.bind(this)
                }))), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "End Time:"), _react["default"].createElement("td", null, _react["default"].createElement(_antd.DatePicker, {
                    value: this.state.endTime,
                    onChange: this.onChangeEndTime.bind(this)
                }))), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "Content:"), _react["default"].createElement("td", null, _react["default"].createElement(_antd.Input, {
                    type: "textarea",
                    rows: 4,
                    value: this.state.content,
                    onChange: this.onChangeContent.bind(this)
                }))));
            };
            _proto.onChange = function onChange() {
                this.props.onChange(_extends({}, this.state));
            };
            _proto.onChangeStartTime = function onChangeStartTime(date, dateStr) {
                var _this2 = this;
                var startTime = Date.parse(dateStr) || 0;
                var endTime = Date.parse(this.state.endTime) || 0;
                if (startTime && endTime && startTime > endTime) {
                    _antd.message.warning("Start Time should not be greater than End Time");
                }
                this.setState({
                    startTime: dateStr
                }, function() {
                    return _this2.onChange();
                });
            };
            _proto.onChangeEndTime = function onChangeEndTime(date, dateStr) {
                var _this3 = this;
                var startTime = Date.parse(this.state.startTime) || 0;
                var endTime = Date.parse(dateStr) || 0;
                if (startTime && endTime && startTime > endTime) {
                    _antd.message.warning("End Time should not be less than Start Time");
                }
                this.setState({
                    endTime: dateStr
                }, function() {
                    return _this3.onChange();
                });
            };
            _proto.onChangeContent = function onChangeContent(event) {
                var _this4 = this;
                var content = event.target.value.trim();
                if (!content) _antd.message.warning("Content should not be empty");
                this.setState({
                    content: content
                }, function() {
                    return _this4.onChange();
                });
            };
            return Conf;
        }(_react["default"].PureComponent);
        exports["default"] = Conf;
    },
    "./src/components/Modify.jsx": function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = void 0;
        var _react = _interopRequireDefault(__webpack_require__("./node_modules/anujs/dist/ReactIE.js"));
        var _app = _interopRequireDefault(__webpack_require__("./src/stores/app.js"));
        var _Conf = _interopRequireDefault(__webpack_require__("./src/components/Conf.jsx"));
        var _antd = __webpack_require__("./patchs/antd.js");
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _extends() {
            _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            return _extends.apply(this, arguments);
        }
        function _inheritsLoose(subClass, superClass) {
            subClass.prototype = Object.create(superClass.prototype);
            subClass.prototype.constructor = subClass;
            subClass.__proto__ = superClass;
        }
        var Modify = function(_React$PureComponent) {
            _inheritsLoose(Modify, _React$PureComponent);
            function Modify() {
                var _this;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                _this = _React$PureComponent.call.apply(_React$PureComponent, [ this ].concat(args)) || this;
                _this.state = {
                    visible: false
                };
                _this.data = {};
                return _this;
            }
            var _proto = Modify.prototype;
            _proto.render = function render() {
                return !this.state.visible ? null : _react["default"].createElement(_antd.Modal, {
                    title: "Modify",
                    width: "350px",
                    maskClosable: false,
                    visible: true,
                    okText: "Save",
                    onOk: this.save.bind(this),
                    cancelText: "Cancel",
                    onCancel: this.close.bind(this)
                }, _react["default"].createElement(_Conf["default"], {
                    startTime: this.props.data.startTime,
                    endTime: this.props.data.endTime,
                    content: this.props.data.content,
                    onChange: this.onChange.bind(this)
                }));
            };
            _proto.open = function open() {
                this.setState({
                    visible: true
                });
            };
            _proto.close = function close() {
                this.setState({
                    visible: false
                });
            };
            _proto.onChange = function onChange(data) {
                this.data = data;
            };
            _proto.save = function save() {
                this.data.uid = this.props.data.uid;
                _app["default"].dispatch.todoModel.modify(this.data);
                this.props.onModify(_extends({}, this.data));
                _antd.message.success("Modified successfully");
            };
            return Modify;
        }(_react["default"].PureComponent);
        exports["default"] = Modify;
    },
    "./src/components/Todo.jsx": function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = void 0;
        var _react = _interopRequireDefault(__webpack_require__("./node_modules/anujs/dist/ReactIE.js"));
        var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");
        var _Add = _interopRequireDefault(__webpack_require__("./src/components/Add.jsx"));
        var _Modify = _interopRequireDefault(__webpack_require__("./src/components/Modify.jsx"));
        var _antd = __webpack_require__("./patchs/antd.js");
        var _app = _interopRequireDefault(__webpack_require__("./src/stores/app.js"));
        var _app2 = _interopRequireDefault(__webpack_require__("./src/styles/app.css"));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _inheritsLoose(subClass, superClass) {
            subClass.prototype = Object.create(superClass.prototype);
            subClass.prototype.constructor = subClass;
            subClass.__proto__ = superClass;
        }
        var Todo = function(_React$Component) {
            _inheritsLoose(Todo, _React$Component);
            function Todo() {
                var _this;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                _this = _React$Component.call.apply(_React$Component, [ this ].concat(args)) || this;
                _this.addRef = _react["default"].createRef();
                _this.modifyRef = _react["default"].createRef();
                _this.state = {
                    selectedRows: [],
                    selectedRowKeys: []
                };
                _this.columns = [ {
                    title: "Start Time",
                    key: "startTime",
                    dataIndex: "startTime",
                    width: 85
                }, {
                    title: "End Time",
                    key: "endTime",
                    dataIndex: "endTime",
                    width: 85
                }, {
                    title: "Content",
                    key: "content",
                    dataIndex: "content"
                } ];
                return _this;
            }
            var _proto = Todo.prototype;
            _proto.render = function render() {
                var _this2 = this;
                return _react["default"].createElement("div", {
                    className: _app2["default"]["Todo"]
                }, _react["default"].createElement(_antd.Table, {
                    rowKey: "uid",
                    columns: this.columns,
                    dataSource: this.props.todoState,
                    rowSelection: this.getRowSelection(),
                    locale: {
                        emptyText: "No Data"
                    }
                }), _react["default"].createElement("div", {
                    className: _app2["default"]["Todo__btn-group"]
                }, _react["default"].createElement(_antd.Button, {
                    onClick: function onClick() {
                        return _this2.addRef.current.open();
                    }
                }, "Add"), _react["default"].createElement(_antd.Button, {
                    onClick: this.onClickDoneButton.bind(this),
                    disabled: !this.state.selectedRows.length
                }, "Done"), _react["default"].createElement(_antd.Button, {
                    onClick: this.onClickDeleteButton.bind(this),
                    disabled: !this.state.selectedRows.length
                }, "Delete"), _react["default"].createElement(_antd.Button, {
                    onClick: function onClick() {
                        return _this2.modifyRef.current.open();
                    },
                    disabled: this.state.selectedRows.length !== 1
                }, "Modify")), _react["default"].createElement(_Add["default"], {
                    ref: this.addRef
                }), _react["default"].createElement(_Modify["default"], {
                    ref: this.modifyRef,
                    data: this.state.selectedRows[0],
                    onModify: this.onModify.bind(this)
                }));
            };
            _proto.getRowSelection = function getRowSelection() {
                var component = this;
                return {
                    selectedRowKeys: this.state.selectedRowKeys,
                    onChange: function onChange(selectedRowKeys, selectedRows) {
                        component.setState({
                            selectedRows: selectedRows,
                            selectedRowKeys: selectedRowKeys
                        });
                    }
                };
            };
            _proto.deleteSelectedRows = function deleteSelectedRows() {
                this.props.todoDispatch["delete"](this.state.selectedRowKeys);
                this.setState({
                    selectedRows: [],
                    selectedRowKeys: []
                });
            };
            _proto.onClickDoneButton = function onClickDoneButton() {
                this.props.doneDispatch.add(this.state.selectedRows);
                this.deleteSelectedRows();
                _antd.message.success("Turned into the done state");
            };
            _proto.onClickDeleteButton = function onClickDeleteButton() {
                this.deleteSelectedRows();
                _antd.message.success("Deleted successfully");
            };
            _proto.onModify = function onModify(rowData) {
                this.setState({
                    selectedRows: [ rowData ]
                });
            };
            return Todo;
        }(_react["default"].Component);
        var mapStateToProps = function mapStateToProps(state, ownProps) {
            return {
                todoState: state.todoModel
            };
        };
        var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
            return {
                todoDispatch: dispatch.todoModel,
                doneDispatch: dispatch.doneModel
            };
        };
        var ConnectedComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Todo);
        var _default = function _default() {
            return _react["default"].createElement(_reactRedux.Provider, {
                store: _app["default"]
            }, _react["default"].createElement(ConnectedComponent, null));
        };
        exports["default"] = _default;
    },
    "./src/stores/app.js": function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = void 0;
        var _core = __webpack_require__("./node_modules/anujs/dist/Rematch.js");
        function _extends() {
            _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            return _extends.apply(this, arguments);
        }
        var todoModel = {
            state: [],
            reducers: {
                add: function add(state, record) {
                    return state.concat(_extends({}, record, {
                        uid: setTimeout(";")
                    }));
                },
                "delete": function _delete(state, uidSet) {
                    return state.filter(function(record) {
                        return -1 === uidSet.findIndex(function(uid) {
                            return uid === record.uid;
                        });
                    });
                },
                modify: function modify(state, record) {
                    return state.map(function(item) {
                        return item.uid === record.uid ? _extends({}, record) : item;
                    });
                }
            }
        };
        var doneModel = {
            state: [],
            reducers: {
                add: function add(state, records) {
                    return state.concat(records);
                }
            }
        };
        var _default = (0, _core.init)({
            models: {
                todoModel: todoModel,
                doneModel: doneModel
            }
        });
        exports["default"] = _default;
    }
} ]);