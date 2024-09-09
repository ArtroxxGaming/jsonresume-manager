<template>
    <div>
        <Tabs>
            <Tab title="Basics" icon="fas fa-user">
                <VueFormGenerator :schema="schemas.basics" :model="resume.content.basics" :options="options" />
                <VueFormGenerator :schema="schemas.location" :model="resume.content.basics.location"
                    :options="options" />
            </Tab>
            <Tab title="Profiles" icon="fa fa-users">
                <DynamicForm
                title="Profile"
                self="profiles"
                :model="resume.content.basics"
                :schema="schemas.profiles" />
            </Tab>
            <Tab title="Work" icon="fa fa-briefcase">
                <DynamicForm
                title="Work"
                self="work"
                :model="resume.content"
                :schema="schemas.work"
                :subforms="subforms.work" />
            </Tab>
            <Tab title="Education" icon="fa fa-graduation-cap">
                <DynamicForm
                title="Education"
                self="education"
                :model="resume.content"
                :schema="schemas.education"
                :subforms="subforms.education" />
            </Tab>
            <Tab title="Skills" icon="fa fa-cogs">
                <DynamicForm
                title="Skills"
                self="skills"
                :model="resume.content"
                :schema="schemas.skills"
                :subforms="subforms.skills" />
            </Tab>
            <Tab title="Awards" icon="fa fa-trophy">
                <VueFormGenerator :schema="schemas.awards" :model="resume.content" :options="options" />
            </Tab>
        </Tabs>
    </div>
</template>

<script>
import jsonresume from './jsonresume';
import FieldResumeImage from './vfg/FieldResumeImage.vue';
import Tabs from './tabs/Tabs.vue';
import Tab from './tabs/Tab.vue';
import { component as VueFormGenerator } from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';
import basics from './schema/basics/basics';
import location from './schema/basics/location';
import profiles from './schema/basics/profiles';
import work from './schema/work';
import education from './schema/education';
import skills from './schema/skills';
import awards from './schema/awards';
import DynamicForm from './dynamic/DynamicForm.vue';
import ListForm from './dynamic/ListForm.vue';

export default {
    name: 'ResumeForm',

    components: {
        Tabs,
        Tab,
        VueFormGenerator,
        DynamicForm,
    },
    props: {
        update: false,
        resume: {
        type: Object,
        default: () => ({
            id: null,
            title: 'Resume Title',
            content: jsonresume,
        }),
        },

    },

    data() {
        return {

            schemas: {
                basics,
                location,
                profiles,
                work,
                education,
                skills,
                awards,
            },

            subforms: {
                work: [
                    {
                        component: ListForm,
                        props: {
                            title: 'Hightlights',
                            self: 'highlights',
                            placeholder: 'Enter a highlight',
                        }
                    }
                ],
                education:[
                    {
                        component: ListForm,
                        props: {
                            self: 'courses',
                            title: 'Courses',
                            placeholder: 'DB1101 - Basic SQL',
                        },
                    }
                ],
                skills: [
                    {
                        component: ListForm,
                        props: {
                            self: 'skills',
                            title: 'Skills',
                            placeholder: 'Enter a skill',
                        },
                    }
                ],
            },
            options: {
                validateAfterLoad: true,
                validateAfterChanged: true,
                validateAsync: true,
            }
        }
    }
}
</script>
