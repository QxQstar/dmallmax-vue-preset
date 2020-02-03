import Vue from 'vue'
import {
    Loading,
    MessageBox,
    Notification,
    Message,
    Input,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Form,
    FormItem,
} from 'element-ui';
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
