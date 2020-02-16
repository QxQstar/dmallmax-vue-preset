import Vue from 'vue'
import {
    Pagination,
    Table,
    TableColumn,
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


// 全局注册基本组件
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn)
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


// 将不常用的组件通过异步组件的方式注册
Vue.component('ElAlert',() => import(/* webpackChunkName: "ElAlert" */'./alert.vue'))
Vue.component('ElAside',() => import(/* webpackChunkName: "ElAside" */'./aside.vue'))
Vue.component('ElAutocomplete',() => import(/* webpackChunkName: "ElAutocomplete" */'./autocomplete.vue'))
Vue.component('ElAvatar',() => import(/* webpackChunkName: "ElAvatar" */'./avatar.vue'))
Vue.component('ElBacktop',() => import(/* webpackChunkName: "ElBacktop" */'./backtop.vue'))
Vue.component('ElBadge',() => import(/* webpackChunkName: "ElBadge" */'./badge.vue'))
Vue.component('ElBreadcrumbItem',() => import(/* webpackChunkName: "ElBreadcrumbItem" */'./breadcrumb-item.vue'))
Vue.component('ElBreadcrumb',() => import(/* webpackChunkName: "ElBreadcrumb" */'./breadcrumb.vue'))
Vue.component('ElCalendar',() => import(/* webpackChunkName: "ElCalendar" */'./calendar.vue'))
Vue.component('ElCard',() => import(/* webpackChunkName: "ElCard" */'./card.vue'))
Vue.component('ElCarouselItem',() => import(/* webpackChunkName: "ElCarouselItem" */'./carousel-item.vue'))
Vue.component('ElCarousel',() => import(/* webpackChunkName: "ElCarousel" */'./carousel.vue'))
Vue.component('ElCascaderPanel',() => import(/* webpackChunkName: "ElCascaderPanel" */'./cascader-panel.vue'))
Vue.component('ElCascader',() => import(/* webpackChunkName: "ElCascader" */'./cascader.vue'))
Vue.component('ElCheckboxButton',() => import(/* webpackChunkName: "ElCheckboxButton" */'./checkbox-button.vue'))
Vue.component('ElCol',() => import(/* webpackChunkName: "ElCol" */'./col.vue'))
Vue.component('ElCollapseItem',() => import(/* webpackChunkName: "ElCollapseItem" */'./collapse-item.vue'))
Vue.component('ElCollapse',() => import(/* webpackChunkName: "ElCollapse" */'./collapse.vue'))
Vue.component('ElColorPicker',() => import(/* webpackChunkName: "ElColorPicker" */'./color-picker.vue'))
Vue.component('ElContainer',() => import(/* webpackChunkName: "ElContainer" */'./container.vue'))
Vue.component('ElDatePicker',() => import(/* webpackChunkName: "ElDatePicker" */'./date-picker.vue'))
Vue.component('ElDivider',() => import(/* webpackChunkName: "ElDivider" */'./divider.vue'))
Vue.component('ElDrawer',() => import(/* webpackChunkName: "ElDrawer" */'./drawer.vue'))
Vue.component('ElDropdownItem',() => import(/* webpackChunkName: "ElDropdownItem" */'./dropdown-item.vue'))
Vue.component('ElDropdownMenu',() => import(/* webpackChunkName: "ElDropdownMenu" */'./dropdown-menu.vue'))
Vue.component('ElDropdown',() => import(/* webpackChunkName: "ElDropdown" */'./dropdown.vue'))
Vue.component('ElFooter',() => import(/* webpackChunkName: "ElFooter" */'./footer.vue'))
Vue.component('ElHeader',() => import(/* webpackChunkName: "ElHeader" */'./header.vue'))
Vue.component('ElIcon',() => import(/* webpackChunkName: "ElIcon" */'./icon.vue'))
Vue.component('ElImage',() => import(/* webpackChunkName: "ElImage" */'./image.vue'))
Vue.component('ElInputNumber',() => import(/* webpackChunkName: "ElInputNumber" */'./input-number.vue'))
Vue.component('ElLink',() => import(/* webpackChunkName: "ElLink" */'./link.vue'))
Vue.component('ElMain',() => import(/* webpackChunkName: "ElMain" */'./main.vue'))
Vue.component('ElMenuItemGroup',() => import(/* webpackChunkName: "ElMenuItemGroup" */'./menu-item-group.vue'))
Vue.component('ElMenuItem',() => import(/* webpackChunkName: "ElMenuItem" */'./menu-item.vue'))
Vue.component('ElMenu',() => import(/* webpackChunkName: "ElMenu" */'./menu.vue'))
Vue.component('ElPageHeader',() => import(/* webpackChunkName: "ElPageHeader" */'./page-header.vue'))
Vue.component('ElPopconfirm',() => import(/* webpackChunkName: "ElPopconfirm" */'./popconfirm.vue'))
Vue.component('ElPopover',() => import(/* webpackChunkName: "ElPopover" */'./popover.vue'))
Vue.component('ElProgress',() => import(/* webpackChunkName: "ElProgress" */'./progress.vue'))
Vue.component('ElRadioButton',() => import(/* webpackChunkName: "ElRadioButton" */'./radio-button.vue'))
Vue.component('ElRate',() => import(/* webpackChunkName: "ElRate" */'./rate.vue'))
Vue.component('ElRow',() => import(/* webpackChunkName: "ElRow" */'./row.vue'))
Vue.component('ElScrollbar',() => import(/* webpackChunkName: "ElScrollbar" */'./scrollbar.vue'))
Vue.component('ElSlider',() => import(/* webpackChunkName: "ElSlider" */'./slider.vue'))
Vue.component('ElSpinner',() => import(/* webpackChunkName: "ElSpinner" */'./spinner.vue'))
Vue.component('ElStep',() => import(/* webpackChunkName: "ElStep" */'./step.vue'))
Vue.component('ElSteps',() => import(/* webpackChunkName: "ElSteps" */'./steps.vue'))
Vue.component('ElSubmenu',() => import(/* webpackChunkName: "ElSubmenu" */'./submenu.vue'))
Vue.component('ElSwitch',() => import(/* webpackChunkName: "ElSwitch" */'./switch.vue'))
Vue.component('ElTabPane',() => import(/* webpackChunkName: "ElTabPane" */'./tab-pane.vue'))
Vue.component('ElTabs',() => import(/* webpackChunkName: "ElTabs" */'./tabs.vue'))
Vue.component('ElTag',() => import(/* webpackChunkName: "ElTag" */'./tag.vue'))
Vue.component('ElTimePicker',() => import(/* webpackChunkName: "ElTimePicker" */'./time-picker.vue'))
Vue.component('ElTimeSelect',() => import(/* webpackChunkName: "ElTimeSelect" */'./time-select.vue'))
Vue.component('ElTimelineItem',() => import(/* webpackChunkName: "ElTimelineItem" */'./timeline-item.vue'))
Vue.component('ElTimeline',() => import(/* webpackChunkName: "ElTimeline" */'./timeline.vue'))
Vue.component('ElTooltip',() => import(/* webpackChunkName: "ElTooltip" */'./tooltip.vue'))
Vue.component('ElTransfer',() => import(/* webpackChunkName: "ElTransfer" */'./transfer.vue'))
Vue.component('ElTree',() => import(/* webpackChunkName: "ElTree" */'./tree.vue'))
Vue.component('ElUpload',() => import(/* webpackChunkName: "ElUpload" */'./upload.vue'))
