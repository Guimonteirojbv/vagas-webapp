import {
    HandHeart,
    Package,
    CalendarCheck,
    ThumbsUp,
    FileCss,
    Code,
    ChartBar,
    DeviceMobile,
    Suitcase,
    Layout,
    FolderOpen,
    FloppyDisk,
} from '@phosphor-icons/react';

const styles = {
    color: '#fff',
    fontSize: '36px',
};

export const Areas = [
    {
        id: 'TechRecruiter',
        name: 'Tech Recruiter',
        icon: <HandHeart style={styles} />,
    },
    {
        id: 'Products',
        name: 'Produtos',
        icon: <Package style={styles} />,
    },
    {
        id: 'Agile',
        name: 'Ágil',
        icon: <CalendarCheck style={styles} />,
    },
    {
        id: 'UXUIDesign',
        name: 'UX/UI Design',
        icon: <Layout style={styles} />,
    },
    {
        id: 'FrontEnd',
        name: 'Front End',
        icon: <FileCss style={styles} />,
    },
    {
        id: 'BackEnd',
        name: 'Back End',
        icon: <Code style={styles} />,
    },
    {
        id: 'Data',
        name: 'Data',
        icon: <ChartBar style={styles} />,
    },
    {
        id: 'Qa',
        name: 'QA',
        icon: <FolderOpen style={styles} />,
    },
    {
        id: 'DevOps',
        name: 'DevOps',
        icon: <FloppyDisk style={styles} />,
    },
];
