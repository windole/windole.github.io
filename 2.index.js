(window["webpackJsonp"] = window["webpackJsonp"] || []).push([ [ 2 ], {
    "./node_modules/react-redux/es/index.js": function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__("dll-reference _React_DLL_base")(29);
    },
    "./patchs/redux.js": function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__("dll-reference _React_DLL_base")(3);
    },
    "./src/components/Done.jsx": function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = void 0;
        var _react = _interopRequireDefault(__webpack_require__("./node_modules/anujs/dist/ReactIE.js"));
        var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");
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
        var Done = function(_React$Component) {
            _inheritsLoose(Done, _React$Component);
            function Done() {
                var _this;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                _this = _React$Component.call.apply(_React$Component, [ this ].concat(args)) || this;
                _this.columns = [ {
                    title: "",
                    key: "index",
                    dataIndex: "index",
                    render: function render(text, record, index) {
                        return index + 1;
                    },
                    width: 60
                }, {
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
            var _proto = Done.prototype;
            _proto.render = function render() {
                return _react["default"].createElement(_antd.Table, {
                    className: _app2["default"]["Done"],
                    rowKey: "uid",
                    columns: this.columns,
                    dataSource: this.props.doneState,
                    locale: {
                        emptyText: "No Data"
                    }
                });
            };
            return Done;
        }(_react["default"].Component);
        var mapStateToProps = function mapStateToProps(state, ownProps) {
            return {
                doneState: state.doneModel
            };
        };
        var ConnectedComponent = (0, _reactRedux.connect)(mapStateToProps)(Done);
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