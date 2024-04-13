var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { L as Layout, _ as _sfc_main$7, u as useData, c as useLangs, w as withBase, i as inBrowser, d as createTitle, m as mergeHead, e as useRoute, p as pathToFile, R as RouterSymbol, f as initData, g as dataSymbol, C as Content, s as siteDataRef, h as createRouter } from "./VPTeamMembers.BaedpD7B.js";
import * as Vue from "vue";
import { defineComponent, h, markRaw, useSSRContext, mergeProps, createVNode, resolveDynamicComponent, inject, shallowRef, computed, toRaw, onMounted, watch, onBeforeUnmount, resolveComponent, withCtx, openBlock, createBlock, ref, unref, watchEffect, onUnmounted, createSSRApp } from "vue";
import ElementPlus from "element-plus";
import hash from "hash-sum";
import { compile, isCodeVueSfc, adaptCreateElement, concatenate, compileTemplateForEval, addScopedStyle } from "vue-inbrowser-compiler-sucrase";
import { parse } from "@vue/compiler-dom";
import { createCompilerError } from "@vue/compiler-core";
import { parse as parse$1 } from "acorn";
import { simple, ancestor } from "acorn-walk";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderVNode, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, renderToString } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
import debounce from "debounce";
import { EditorState, Compartment, StateEffect } from "@codemirror/state";
import { EditorView, keymap, placeholder } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { indentUnit } from "@codemirror/language";
import { basicSetup } from "codemirror";
import { vue } from "@codemirror/lang-vue";
import { oneDark } from "@codemirror/theme-one-dark";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import "@vueuse/core";
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", _sfc_main$7);
  }
};
const defaultAttrAllowList = [
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "contentScriptType",
  "contentStyleType",
  "diffuseConstant",
  "edgeMode",
  "filterRes",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "referrerPolicy",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
];
const ELEMENT = 1;
const SIMPLE_EXPRESSION = 4;
const INTERPOLATION = 5;
function checkTemplate($options, checkVariableAvailability) {
  if (!$options.template) {
    return;
  }
  let ast;
  try {
    ast = parse($options.template);
  } catch (e) {
    throw createCompilerError(e.code, e.loc);
  }
  if (!checkVariableAvailability) {
    return;
  }
  const propNamesArray = $options.props ? Array.isArray($options.props) ? $options.props : Object.keys($options.props) : [];
  let dataArray = typeof $options.data === "function" ? Object.keys($options.data()) : [];
  let computedArray = $options.computed ? Object.keys($options.computed) : [];
  const methodsArray = $options && $options.methods ? Object.keys($options.methods) : [];
  if (typeof $options.setup === "function") {
    let su = $options.setup();
    for (let k in su) {
      console.log(su[k].constructor.name);
      if (su[k].constructor.name === "ComputedRefImpl") {
        computedArray.push($options.setup[k]);
      } else if (su[k].constructor.name === "Function") {
        methodsArray.push(su[k]);
      } else {
        dataArray.push(k);
      }
    }
  }
  const scriptVars = [
    ...propNamesArray,
    ...dataArray,
    ...computedArray,
    ...methodsArray
  ];
  const attrAllowList = $options.attrAllowList || defaultAttrAllowList;
  traverse(ast, [
    (templateAst, parentTemplateVars) => {
      const templateVars = [];
      if (templateAst.type === ELEMENT) {
        templateAst.props.forEach(
          (attr) => {
            if (!attrAllowList.includes(attr.name) && !/^[a-z-:]+$/g.test(attr.name)) {
              throw new VueLiveParseTemplateAttrError(
                "[VueLive] Invalid attribute name: " + attr.name,
                attr.loc
              );
            }
            const exp = attr.type !== SIMPLE_EXPRESSION && attr.exp ? attr.exp.content : void 0;
            if (!exp) {
              return;
            }
            if (attr.name === "slot") {
              const astSlot = parse$1(`var ${exp}=1`, { ecmaVersion: 2020 });
              simple(astSlot, {
                VariableDeclarator(declarator) {
                  const { id } = declarator;
                  switch (id.type) {
                    case "ArrayPattern":
                      id.elements.forEach((e) => {
                        templateVars.push(e.name);
                      });
                      break;
                    case "ObjectPattern":
                      id.properties.forEach((e) => {
                        templateVars.push(e.value.name);
                      });
                      break;
                    case "Identifier":
                      templateVars.push(id.name);
                      break;
                  }
                  return false;
                }
              });
            } else if (attr.name === "for") {
              const [vForLeft] = exp.split(/( in | of )/);
              const doubleForRE = /\((\w+),(\w+)\)/;
              if (doubleForRE.test(vForLeft.replace(" ", ""))) {
                const [, var1, var2] = Array.from(
                  doubleForRE.exec(vForLeft.replace(" ", "")) || []
                );
                templateVars.push(var1 || "");
                templateVars.push(var2 || "");
              } else {
                templateVars.push(vForLeft);
              }
            } else {
              try {
                checkExpression(exp, scriptVars, [
                  ...parentTemplateVars,
                  ...templateVars
                ]);
              } catch (e) {
                throw new VueLiveParseTemplateError(
                  e.message,
                  exp,
                  e,
                  attr.loc
                );
              }
            }
          }
        );
      } else if (templateAst.type === INTERPOLATION) {
        try {
          if (templateAst.content) {
            checkExpression(
              templateAst.content.content,
              scriptVars,
              parentTemplateVars
            );
          }
        } catch (e) {
          throw new VueLiveParseTemplateError(
            e.message,
            templateAst.content,
            e,
            templateAst.loc
          );
        }
      }
      return templateVars;
    }
  ]);
}
function checkExpression(expression, availableVars, templateVars) {
  const ast = parse$1(`(function(){return ${expression}})()`, {
    ecmaVersion: 2020
  });
  ancestor(ast, {
    Identifier(identifier, ancestors) {
      const varName = identifier.name;
      if (
        // if the identifier is a function call leave it alone
        ancestors.length >= 2 && ancestors[ancestors.length - 2].type === "CallExpression" && ancestors[ancestors.length - 2].callee.name === varName
      ) {
        return;
      } else if (availableVars.indexOf(varName) === -1 && templateVars.indexOf(varName) === -1 && !/^\$/.test(varName)) {
        const funcs = ancestors.filter(
          (node) => node.type === "ArrowFunctionExpression" || node.type === "FunctionExpression"
        );
        if (funcs.some(
          (func) => func.params.some((p) => p.name === varName)
        )) {
          return;
        }
        throw new VueLiveUndefinedVariableError(
          `Variable "${varName}" is not defined.`,
          varName
        );
      }
    }
  });
}
function traverse(templateAst, handlers, availableVarNames = []) {
  const traverseAstChildren = (templateAst2, availableVarNamesChildren) => {
    const { children } = templateAst2;
    if (children) {
      for (const childNode of children) {
        traverse(childNode, handlers, availableVarNamesChildren);
      }
    }
  };
  const availableVarNamesThisLevel = handlers.reduce((acc, handler) => {
    const result = handler(templateAst, availableVarNames);
    if (result && result.length) {
      return acc.concat(result);
    }
    return acc;
  }, []);
  traverseAstChildren(templateAst, [
    ...availableVarNames,
    ...availableVarNamesThisLevel
  ]);
}
class VueLiveUndefinedVariableError extends Error {
  constructor(message, varName) {
    super(message);
    __publicField(this, "varName");
    this.varName = varName;
  }
}
class VueLiveParseTemplateAttrError extends Error {
  constructor(message, loc) {
    super(message);
    __publicField(this, "loc");
    this.loc = loc;
  }
}
class VueLiveParseTemplateError extends Error {
  constructor(message, expression, subError, loc) {
    super(message);
    __publicField(this, "expression");
    __publicField(this, "subError");
    __publicField(this, "loc");
    this.expression = expression;
    this.subError = subError;
    this.loc = loc;
  }
}
function evalInContext(code, require2, adaptCreateElement2, concatenate2, h2) {
  const func = new Function(
    "require",
    "__pragma__",
    "__concatenate__",
    "h",
    code
  );
  return func(require2, adaptCreateElement2, concatenate2, h2);
}
function requireAtRuntime(requires, filepath) {
  requires = requires || {};
  if (!(filepath in requires)) {
    throw new Error(
      "import or require() statements can be added only by setting it using the requires prop"
    );
  }
  return requires[filepath];
}
const _sfc_main$6 = defineComponent({
  name: "VueLivePreviewComponent",
  emits: ["error", "success", "detect-language"],
  components: {},
  errorCaptured(err) {
    this.handleError(err);
  },
  props: {
    /**
     * code rendered
     */
    code: {
      type: String,
      required: true
    },
    /**
     * Hashtable of auto-registered components
     * @example { DatePicker: VueDatePicker }
     * @example { VueDatePicker }
     */
    components: {
      type: Object,
      default: () => {
      }
    },
    /**
     * Hashtable of modules available in require and import statements
     * in the code prop
     * @example { lodash: require("lodash") }
     * @example { moment: require("moment") }
     */
    requires: {
      type: Object,
      default: () => {
      }
    },
    jsx: {
      type: Boolean,
      default: false
    },
    /**
     * Outside data to the preview
     * @example { count: 1 }
     */
    dataScope: {
      type: Object,
      default: () => {
      }
    },
    /**
     * Avoid checking variables for availability it template
     */
    checkVariableAvailability: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scope: this.generateScope(),
      previewedComponent: {},
      iteration: 0,
      error: false,
      removeScopedStyle: () => {
      }
    };
  },
  computed: {
    requiresPlusVue() {
      return { vue: Vue, ...this.requires };
    }
  },
  created() {
    this.renderComponent(this.code.trim());
  },
  destroyed() {
    this.removeStyle();
  },
  watch: {
    code(value) {
      this.renderComponent(value.trim());
    }
  },
  methods: {
    /**
     * Generates the Scope Id attribute value. It will be added to each
     * tag if a style is applied to scope the style only to this example
     */
    generateScope() {
      return "v-xxxxxxxx".replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : r & 3 | 8;
        return v.toString(16);
      });
    },
    handleError(e) {
      if (e.constructor === VueLiveParseTemplateError) {
        e.message = `Cannot parse template expression: ${JSON.stringify(
          e.expression.content || e.expression
        )}

${e.message}`;
      }
      this.$emit("error", e);
      this.error = e.message;
    },
    removeStyle() {
      if (this.removeScopedStyle) {
        this.removeScopedStyle();
      }
    },
    renderComponent(code) {
      let options = {};
      let style;
      try {
        const renderedComponent = compile(
          code,
          this.jsx ? {
            jsxPragma: "__pragma__(h)"
          } : {}
        );
        style = renderedComponent.style;
        if (renderedComponent.script) {
          this.$emit("detect-language", isCodeVueSfc(code) ? "vue" : "vsg");
          const calcOptions = () => {
            const script = renderedComponent.script;
            options = evalInContext(
              script,
              (filepath) => requireAtRuntime(this.requiresPlusVue, filepath),
              adaptCreateElement,
              concatenate,
              h
            ) || {};
            if (options.render) {
              const preview = this;
              const originalRender = options.render;
              options.render = function(...args) {
                try {
                  return originalRender.call(this, ...args);
                } catch (e) {
                  preview.handleError(e);
                  return;
                }
              };
            }
            options.name = "VueLiveCompiledExample";
          };
          calcOptions();
          if (options.template) {
            renderedComponent.template = options.template;
            compileTemplateForEval(renderedComponent);
            calcOptions();
            delete options.template;
          }
          if (this.dataScope) {
            const mergeData = {
              ...options.data(),
              ...options.setup(),
              ...this.dataScope
            };
            options.data = () => mergeData;
          }
        }
        checkTemplate(
          {
            template: renderedComponent.raw.template,
            ...options
          },
          this.checkVariableAvailability
        );
      } catch (e) {
        console.error(e);
        this.handleError(e);
        return;
      }
      if (this.components) {
        if (!options.components) {
          options.components = this.components;
        } else {
          options.components = { ...options.components, ...this.components };
        }
      }
      this.removeStyle();
      if (style) {
        options.__scopeId = `data-${this.scope}`;
        this.removeScopedStyle = addScopedStyle(style, this.scope);
      }
      if (!options.render) {
        this.handleError({
          message: "[Vue Live] no template or render function specified. Example cannot be rendered."
        });
        return;
      }
      this.previewedComponent = markRaw(options);
      this.iteration = this.iteration + 1;
      this.error = false;
      this.$emit("success");
    }
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.error) {
    _push(`<pre${ssrRenderAttrs(mergeProps({ class: "VueLive-error" }, _attrs))}>${ssrInterpolate(_ctx.error)}</pre>`);
  } else if (_ctx.previewedComponent) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.previewedComponent), mergeProps({ key: _ctx.iteration }, _attrs), null), _parent);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/vue-live/Preview.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props2, ctx) : void 0;
};
const VueLivePreview = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const DEFAULT_CONFIG = Object.freeze({
  autofocus: false,
  disabled: false,
  indentWithTab: true,
  tabSize: 2,
  placeholder: "",
  autoDestroy: true,
  extensions: [basicSetup]
});
const CONFIG_SYMBOL = Symbol("vue-codemirror-global-config");
const useGlobalConfig = () => {
  return inject(CONFIG_SYMBOL, {});
};
const createEditorState = ({ onUpdate, onChange, onFocus, onBlur, ...config }) => {
  return EditorState.create({
    doc: config.doc,
    selection: config.selection,
    extensions: [
      ...Array.isArray(config.extensions) ? config.extensions : [config.extensions],
      EditorView.updateListener.of((viewUpdate) => {
        onUpdate(viewUpdate);
        if (viewUpdate.docChanged) {
          onChange(viewUpdate.state.doc.toString(), viewUpdate);
        }
        if (viewUpdate.focusChanged) {
          viewUpdate.view.hasFocus ? onFocus(viewUpdate) : onBlur(viewUpdate);
        }
      })
    ]
  });
};
const createEditorView = (config) => new EditorView({ ...config });
const destroyEditorView = (view) => view.destroy();
const createEditorCompartment = (view) => {
  const compartment = new Compartment();
  const run = (extension) => {
    compartment.get(view.state) ? view.dispatch({ effects: compartment.reconfigure(extension) }) : view.dispatch({ effects: StateEffect.appendConfig.of(compartment.of(extension)) });
  };
  return { compartment, run };
};
const createEditorExtensionToggler = (view, extension) => {
  const { compartment, run } = createEditorCompartment(view);
  return (targetApply) => {
    const exExtension = compartment.get(view.state);
    const apply = targetApply ?? exExtension !== extension;
    run(apply ? extension : []);
  };
};
const getEditorTools = (view) => {
  const getDoc = () => view.state.doc.toString();
  const setDoc = (newDoc) => {
    if (newDoc !== getDoc()) {
      view.dispatch({
        changes: {
          from: 0,
          to: view.state.doc.length,
          insert: newDoc
        }
      });
    }
  };
  const focus = () => view.focus();
  const { run: reExtensions } = createEditorCompartment(view);
  const toggleDisabled = createEditorExtensionToggler(view, [
    EditorView.editable.of(false),
    EditorState.readOnly.of(true)
  ]);
  const toggleIndentWithTab = createEditorExtensionToggler(view, keymap.of([indentWithTab]));
  const { run: reTabSize } = createEditorCompartment(view);
  const setTabSize = (tabSize) => {
    reTabSize([EditorState.tabSize.of(tabSize), indentUnit.of(" ".repeat(tabSize))]);
  };
  const { run: rePhrases } = createEditorCompartment(view);
  const setPhrases = (phrases) => {
    rePhrases([EditorState.phrases.of(phrases)]);
  };
  const { run: rePlaceholder } = createEditorCompartment(view);
  const setPlaceholder = (value) => {
    rePlaceholder(placeholder(value));
  };
  const { run: reStyle } = createEditorCompartment(view);
  const setStyle = (style = {}) => {
    reStyle(EditorView.theme({ "&": { ...style } }));
  };
  return {
    focus,
    getDoc,
    setDoc,
    reExtensions,
    toggleDisabled,
    toggleIndentWithTab,
    setTabSize,
    setPhrases,
    setPlaceholder,
    setStyle
  };
};
const UNDEFINED = void 0;
const NonDefaultBooleanType = {
  type: Boolean,
  default: UNDEFINED
};
const configProps = {
  autofocus: NonDefaultBooleanType,
  disabled: NonDefaultBooleanType,
  indentWithTab: NonDefaultBooleanType,
  tabSize: Number,
  placeholder: String,
  style: Object,
  autoDestroy: NonDefaultBooleanType,
  phrases: Object,
  // codemirror options
  root: Object,
  extensions: Array,
  selection: Object
};
const modelValueProp = {
  modelValue: {
    type: String,
    default: ""
  }
};
const props = {
  ...configProps,
  ...modelValueProp
};
var EventKey = /* @__PURE__ */ ((EventKey2) => {
  EventKey2["Change"] = "change";
  EventKey2["Update"] = "update";
  EventKey2["Focus"] = "focus";
  EventKey2["Blur"] = "blur";
  EventKey2["Ready"] = "ready";
  EventKey2["ModelUpdate"] = "update:modelValue";
  return EventKey2;
})(EventKey || {});
const editorEvents = {
  // when content(doc) change only
  [
    "change"
    /* Change */
  ]: (value, viewUpdate) => true,
  // when codemirror state change
  [
    "update"
    /* Update */
  ]: (viewUpdate) => true,
  [
    "focus"
    /* Focus */
  ]: (viewUpdate) => true,
  [
    "blur"
    /* Blur */
  ]: (viewUpdate) => true,
  // when component mounted
  [
    "ready"
    /* Ready */
  ]: (payload) => true
};
const modelUpdateEvent = {
  [
    "update:modelValue"
    /* ModelUpdate */
  ]: editorEvents[
    "change"
    /* Change */
  ]
};
const events = {
  ...editorEvents,
  ...modelUpdateEvent
};
const Component = defineComponent({
  name: "VueCodemirror",
  props: { ...props },
  emits: { ...events },
  setup(props2, context) {
    const container = shallowRef();
    const state = shallowRef();
    const view = shallowRef();
    const defaultConfig = {
      ...DEFAULT_CONFIG,
      ...useGlobalConfig()
    };
    const config = computed(() => {
      const result = {};
      Object.keys(toRaw(props2)).forEach((key) => {
        if (key !== "modelValue") {
          result[key] = props2[key] ?? defaultConfig[key];
        }
      });
      return result;
    });
    onMounted(() => {
      state.value = createEditorState({
        doc: props2.modelValue,
        selection: config.value.selection,
        // The extensions are split into two parts, global and component prop.
        // Only the global part is initialized here.
        // The prop part is dynamically reconfigured after the component is mounted.
        extensions: defaultConfig.extensions ?? [],
        onFocus: (viewUpdate) => context.emit(EventKey.Focus, viewUpdate),
        onBlur: (viewUpdate) => context.emit(EventKey.Blur, viewUpdate),
        onUpdate: (viewUpdate) => context.emit(EventKey.Update, viewUpdate),
        onChange: (newDoc, viewUpdate) => {
          if (newDoc !== props2.modelValue) {
            context.emit(EventKey.Change, newDoc, viewUpdate);
            context.emit(EventKey.ModelUpdate, newDoc, viewUpdate);
          }
        }
      });
      view.value = createEditorView({
        state: state.value,
        parent: container.value,
        root: config.value.root
      });
      const editorTools = getEditorTools(view.value);
      watch(
        () => props2.modelValue,
        (newValue) => {
          if (newValue !== editorTools.getDoc()) {
            editorTools.setDoc(newValue);
          }
        }
      );
      watch(
        () => props2.extensions,
        (extensions) => editorTools.reExtensions(extensions || []),
        { immediate: true }
      );
      watch(
        () => config.value.disabled,
        (disabled) => editorTools.toggleDisabled(disabled),
        { immediate: true }
      );
      watch(
        () => config.value.indentWithTab,
        (iwt) => editorTools.toggleIndentWithTab(iwt),
        { immediate: true }
      );
      watch(
        () => config.value.tabSize,
        (tabSize) => editorTools.setTabSize(tabSize),
        { immediate: true }
      );
      watch(
        () => config.value.phrases,
        (phrases) => editorTools.setPhrases(phrases || {}),
        { immediate: true }
      );
      watch(
        () => config.value.placeholder,
        (placeholder2) => editorTools.setPlaceholder(placeholder2),
        { immediate: true }
      );
      watch(
        () => config.value.style,
        (style) => editorTools.setStyle(style),
        { immediate: true }
      );
      if (config.value.autofocus) {
        editorTools.focus();
      }
      context.emit(EventKey.Ready, {
        state: state.value,
        view: view.value,
        container: container.value
      });
    });
    onBeforeUnmount(() => {
      if (config.value.autoDestroy && view.value) {
        destroyEditorView(view.value);
      }
    });
    return () => {
      return h("div", {
        class: "v-codemirror",
        style: { display: "contents" },
        ref: container
      });
    };
  }
});
const Codemirror = Component;
const UPDATE_DELAY$1 = 300;
const _sfc_main$5 = defineComponent({
  name: "VueLiveEditor",
  inheritAttrs: false,
  components: { Codemirror },
  props: {
    code: {
      type: String,
      required: true
    },
    error: {
      type: [Error, Object],
      default: void 0
    },
    delay: {
      type: Number,
      default: UPDATE_DELAY$1
    },
    editorProps: {
      type: Object,
      default: () => ({})
    },
    prismLang: {
      type: String,
      default: "html",
      validator: (val) => ["html", "vsg"].includes(val)
    },
    jsx: {
      type: Boolean,
      default: false
    },
    squiggles: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      updatePreview: () => {
      },
      /**
       * This data only gets changed when changing language.
       * it allows for copy and pasting without having the code
       * editor repainted every keystroke
       */
      extensions: [vue(), oneDark],
      stableCode: this.code,
      highlight: () => (code) => code
    };
  },
  async beforeMount() {
  },
  methods: {
    // highlighter(code: string) {
    //   return this.highlight(this.prismLang as "vue" | "vsg", this.jsx)(
    //     code,
    //     this.squiggles && this.error && this.error.loc
    //   );
    // },
  },
  watch: {
    code(value) {
      this.updatePreview(value);
    }
  },
  created() {
    this.updatePreview = debounce((value) => {
      this.stableCode = value;
      this.$emit("change", value);
    }, this.delay);
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Codemirror = resolveComponent("Codemirror");
  _push(ssrRenderComponent(_component_Codemirror, mergeProps({
    modelValue: _ctx.stableCode,
    "onUpdate:modelValue": [($event) => _ctx.stableCode = $event, _ctx.updatePreview],
    placeholder: "Code goes here...",
    style: { height: "400px" },
    autofocus: true,
    "indent-with-tab": true,
    "tab-size": 2,
    extensions: _ctx.extensions
  }, _attrs), null, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/vue-live/Editor.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props2, ctx) : void 0;
};
const VueLiveEditor = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "VueLive-container" }, _attrs))}><div class="VueLive-editor">`);
  ssrRenderSlot(_ctx.$slots, "editor", {}, null, _push, _parent);
  _push(`</div><div class="VueLivePreview">`);
  ssrRenderSlot(_ctx.$slots, "preview", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/vue-live/VueLiveDefaultLayout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props2, ctx) : void 0;
};
const VueLiveDefaultLayout = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const LANG_TO_PRISM = {
  vue: "html",
  vsg: "vsg"
};
const UPDATE_DELAY = 300;
const _sfc_main$3 = defineComponent({
  name: "VueLive",
  components: { Preview: VueLivePreview, Editor: VueLiveEditor },
  props: {
    /**
     * code rendered in the preview and the editor
     */
    code: {
      type: String,
      required: true
    },
    /**
     * Layout vue component with 2 slots named `editor` & `preview`
     */
    layout: {
      type: Object,
      default: void 0
    },
    /**
     * Hashtable of auto-registered components
     * @example { DatePicker: VueDatePicker }
     * @example { VueDatePicker }
     */
    components: {
      type: Object,
      default: () => {
      }
    },
    /**
     * Hashtable of modules available in require and import statements
     * in the Preview component
     * @example { lodash: require("lodash") }
     * @example { moment: require("moment") }
     */
    requires: {
      type: Object,
      default: () => {
      }
    },
    /**
     * Time in ms debouncing updates to the preview
     */
    delay: {
      type: Number,
      default: UPDATE_DELAY
    },
    /**
     * Do the code contain JSX rendered functions
     */
    jsx: {
      type: Boolean,
      default: false
    },
    /**
     * These props will be passed as a spreat to your layout
     * They can be used to change the style
     */
    layoutProps: {
      type: Object,
      default: void 0
    },
    /**
     * Props of vue-prism-editor
     * @example { lineNumbers: true }
     * @see https://github.com/koca/vue-prism-editor
     */
    editorProps: {
      type: Object,
      default: () => ({})
    },
    /**
     * Outside data to the preview
     * @example { count: 1 }
     */
    dataScope: {
      type: Object,
      default: () => {
      }
    },
    /**
     * Set if checking variables for availability
     * when used in template
     * NOTE: if this is not checked, undefined vars will yield a blank output
     */
    checkVariableAvailability: {
      type: Boolean,
      default: true
    },
    /**
     * Show the red markings
     * where the compiler found errors
     */
    squiggles: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      model: this.code,
      lang: "vue",
      prismLang: "html",
      VueLiveDefaultLayout: markRaw(VueLiveDefaultLayout),
      /**
       * this data only gets changed when changing language.
       * it allows for copy and pasting without having the code
       * editor repainted every keystroke
       */
      stableCode: this.code,
      error: void 0
    };
  },
  computed: {
    codeKey() {
      return hash(this.model);
    }
  },
  watch: {
    code(newCode) {
      this.stableCode = newCode;
      this.model = newCode;
    }
  },
  methods: {
    updatePreview(code) {
      this.stableCode = code;
      this.model = code;
      this.$emit("change", code);
    },
    switchLanguage(newLang) {
      this.lang = newLang;
      const newPrismLang = LANG_TO_PRISM[newLang];
      if (this.prismLang !== newPrismLang) {
        this.prismLang = newPrismLang;
        this.stableCode = this.model;
      }
    },
    handleSuccess() {
      this.error = void 0;
      this.$emit("success");
    },
    handleError(e) {
      this.error = e;
      this.$emit("error", e);
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Editor = resolveComponent("Editor");
  const _component_Preview = resolveComponent("Preview");
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.layout ? _ctx.layout : _ctx.VueLiveDefaultLayout), mergeProps(_ctx.layoutProps, {
    code: _ctx.stableCode,
    language: _ctx.lang,
    "prism-lang": _ctx.prismLang,
    requires: _ctx.requires,
    "data-scope": _ctx.dataScope,
    components: _ctx.components
  }, _attrs), {
    editor: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Editor, {
          code: _ctx.stableCode,
          delay: _ctx.delay,
          "prism-lang": _ctx.prismLang,
          "editor-props": _ctx.editorProps,
          error: _ctx.error,
          jsx: _ctx.jsx,
          squiggles: _ctx.squiggles,
          onChange: _ctx.updatePreview
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Editor, {
            code: _ctx.stableCode,
            delay: _ctx.delay,
            "prism-lang": _ctx.prismLang,
            "editor-props": _ctx.editorProps,
            error: _ctx.error,
            jsx: _ctx.jsx,
            squiggles: _ctx.squiggles,
            onChange: _ctx.updatePreview
          }, null, 8, ["code", "delay", "prism-lang", "editor-props", "error", "jsx", "squiggles", "onChange"])
        ];
      }
    }),
    preview: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Preview, {
          key: _ctx.codeKey,
          code: _ctx.model,
          onDetectLanguage: _ctx.switchLanguage,
          onError: _ctx.handleError,
          onSuccess: _ctx.handleSuccess,
          components: _ctx.components,
          requires: _ctx.requires,
          jsx: _ctx.jsx,
          "data-scope": _ctx.dataScope,
          "check-variable-availability": _ctx.checkVariableAvailability
        }, null, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock(_component_Preview, {
            key: _ctx.codeKey,
            code: _ctx.model,
            onDetectLanguage: _ctx.switchLanguage,
            onError: _ctx.handleError,
            onSuccess: _ctx.handleSuccess,
            components: _ctx.components,
            requires: _ctx.requires,
            jsx: _ctx.jsx,
            "data-scope": _ctx.dataScope,
            "check-variable-availability": _ctx.checkVariableAvailability
          }, null, 8, ["code", "onDetectLanguage", "onError", "onSuccess", "components", "requires", "jsx", "data-scope", "check-variable-availability"]))
        ];
      }
    }),
    _: 1
  }), _parent);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/vue-live/VueLive.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props2, ctx) : void 0;
};
const VueLive = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
function install(Vue2) {
  if (install.installed)
    return;
  install.installed = true;
  Vue2.component("VueLive", VueLive);
  Vue2.component("VueLivePreview", VueLivePreview);
  Vue2.component("VueLiveEditor", VueLiveEditor);
}
const plugin = {
  install
};
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}
const _sfc_main$2 = {
  __name: "vue-live-layout",
  __ssrInlineRender: true,
  props: {
    lang: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "preview-code" }, _attrs))}><div class="preview block">`);
      ssrRenderSlot(_ctx.$slots, "preview", {}, null, _push, _parent);
      _push(`</div><div class="${ssrRenderClass(`language-${__props.lang} editor block`)}">`);
      ssrRenderSlot(_ctx.$slots, "editor", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/vue-live-layout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props2, ctx) : void 0;
};
const VueLiveWithLayout = (props2) => h(VueLive, { ...props2, layout: _sfc_main$2 });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "liveEditor",
  __ssrInlineRender: true,
  props: {
    lang: {},
    rcode: {}
  },
  setup(__props) {
    const props2 = __props;
    const code = ref("");
    const extensions = computed(() => {
      const ex = [oneDark];
      if (props2.lang === "html") {
        ex.push(html());
      } else if (props2.lang === "javascript") {
        ex.push(javascript());
      } else if (props2.lang === "vue") {
        ex.push(vue());
      } else {
        ex.push(html());
      }
      return ex;
    });
    const view = shallowRef();
    const handleReady = (payload) => {
      view.value = payload.view;
    };
    onMounted(() => {
      let value = props2.rcode || "";
      value = value.replaceAll("sscript", "script");
      if (props2.lang === "html") {
        code.value = value;
      } else if (props2.lang === "vue")
        ;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-3b6c4fb8>`);
      _push(ssrRenderComponent(unref(Codemirror), {
        modelValue: code.value,
        "onUpdate:modelValue": ($event) => code.value = $event,
        placeholder: "Code goes here...",
        style: { height: "400px" },
        autofocus: true,
        "indent-with-tab": true,
        "tab-size": 2,
        extensions: extensions.value,
        onReady: handleReady
      }, null, _parent));
      if (_ctx.lang === "html") {
        _push(`<!--[-->`);
        if (_ctx.lang === "html") {
          _push(`<iframe seamless sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"${ssrRenderAttr("srcdoc", code.value)} border="0" frameborder="0" data-v-3b6c4fb8></iframe>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else if (_ctx.lang === "vue") {
        _push(`<!--[--><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/liveEditor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
const liveEditor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3b6c4fb8"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    const { localeLinks } = useLangs({ removeCurrent: false });
    const root = ref("/");
    onMounted(() => {
      var _a;
      const path = window.location.pathname.replace(site.value.base, "").replace(/(^.*?\/).*$/, "/$1");
      if (localeLinks.value.length) {
        root.value = ((_a = localeLinks.value.find(({ link: link2 }) => link2.startsWith(path))) == null ? void 0 : _a.link) || localeLinks.value[0].link;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-5d209734><h1 data-v-5d209734>404</h1><div class="cloak__wrapper" data-v-5d209734><div class="cloak__container" data-v-5d209734><div class="cloak" data-v-5d209734></div></div></div><div class="info" data-v-5d209734><h2 data-v-5d209734>页面走丢了！</h2><p data-v-5d209734>先到首页或者通过顶部导航栏到其他模块流览其他内容</p><a${ssrRenderAttr("href", unref(withBase)(root.value))} aria-label="首页" data-v-5d209734>首页</a></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/NotFound.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d209734"]]);
const RawTheme = {
  ...theme,
  NotFound,
  enhanceApp(ctx) {
    theme.enhanceApp(ctx);
    ctx.app.use(ElementPlus);
    ctx.app.component("live-editor", liveEditor);
    ctx.app.component("VueLive", VueLiveWithLayout);
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", (e) => {
        var _a;
        if (e.key === "Escape") {
          (_a = document.querySelector(".modal-back")) == null ? void 0 : _a.click();
        }
      });
      window.addEventListener("click", (e) => {
        const el = e.target;
        if (el.matches('div[class*="language-"] > button.run')) {
          const parent = el.parentElement;
          if (!parent) {
            return;
          }
          const sibling = parent.querySelector("code");
          if (!sibling)
            return;
          let text = "";
          sibling.querySelectorAll("span.line:not(.diff.remove)").forEach((node) => text += (node.textContent || "") + "\n");
          text = text.slice(0, -1);
          let func = new Function(text);
          try {
            let result = func();
          } catch (e2) {
            alert(e2);
          }
        }
      });
    }
  }
};
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        if (!group)
          return;
        const i = Array.from(group.querySelectorAll("input")).indexOf(el);
        if (i < 0)
          return;
        const blocks = group.querySelector(".blocks");
        if (!blocks)
          return;
        const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
        if (!current)
          return;
        const next = blocks.children[i];
        if (!next || current === next)
          return;
        current.classList.remove("active");
        next.classList.add("active");
        const label = group == null ? void 0 : group.querySelector(`label[for="${el.id}"]`);
        label == null ? void 0 : label.scrollIntoView({ block: "nearest" });
      }
    });
  }
}
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        const ignoredNodes = [".vp-copy-ignore", ".diff.remove"];
        const clone = sibling.cloneNode(true);
        clone.querySelectorAll(ignoredNodes.join(",")).forEach((node) => node.remove());
        let text = clone.textContent || "";
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let isFirstUpdate = true;
  let managedHeadElements = [];
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      newTags.forEach((tag) => {
        const headEl = createHeadElement(tag);
        for (const el of document.head.children) {
          if (el.isEqualNode(headEl)) {
            managedHeadElements.push(el);
            return;
          }
        }
      });
      return;
    }
    const newElements = newTags.map(createHeadElement);
    managedHeadElements.forEach((oldEl, oldIndex) => {
      const matchedIndex = newElements.findIndex((newEl) => newEl == null ? void 0 : newEl.isEqualNode(oldEl ?? null));
      if (matchedIndex !== -1) {
        delete newElements[matchedIndex];
      } else {
        oldEl == null ? void 0 : oldEl.remove();
        delete managedHeadElements[oldIndex];
      }
    });
    newElements.forEach((el) => el && document.head.appendChild(el));
    managedHeadElements = [...managedHeadElements, ...newElements].filter(Boolean);
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    const title = createTitle(siteData, pageData);
    if (title !== document.title) {
      document.title = title;
    }
    const description = pageDescription || siteData.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      if (metaDescriptionElement.getAttribute("content") !== description) {
        metaDescriptionElement.setAttribute("content", description);
      }
    } else {
      createHeadElement(["meta", { name: "description", content: description }]);
    }
    updateHeadTags(mergeHead(siteData.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  if (tag === "script" && !attrs.async) {
    el.async = false;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base = resolveThemeExtends(theme2.extends);
    return {
      ...base,
      ...theme2,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site, lang, dir } = useData();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = lang.value;
        document.documentElement.dir = dir.value;
      });
    });
    if (site.value.router.prefetchLinks) {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  globalThis.__VITEPRESS__ = true;
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        initialPath = pageFilePath;
      }
      if (isInitialPageLoad || initialPath === pageFilePath) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      if (true) {
        pageModule = import(
          /*@vite-ignore*/
          pageFilePath + "?t=" + Date.now()
        );
      }
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "" };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  render
};
