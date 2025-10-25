

import { ServiceCategory } from './types';
// FIX: Corrected import path for icons.
import {
    WrenchScrewdriverIcon, BeakerIcon, UsersIcon, DocumentCheckIcon,
    BuildingLibraryIcon, CircleStackIcon, ClipboardDocumentListIcon, HeartIcon
} from './components/icons';

export const serviceCategories: { [key: string]: ServiceCategory } = {
    operations: {
        name: 'Clinical Operations',
        description: 'Manage equipment, medical gases, and patient transport services.',
        icon: WrenchScrewdriverIcon,
        modules: [
            { key: 'equipment', name: 'Equipment Fleet' },
            { key: 'gas', name: 'Gas Inventory' },
            { key: 'porters', name: 'Porter Management' },
        ],
    },
    quality: {
        name: 'Quality & Patient Care',
        description: 'Oversee patient feedback, lab results, and discharge processes.',
        icon: HeartIcon,
        modules: [
            { key: 'feedback', name: 'Patient Feedback' },
            { key: 'labs', name: 'Lab Results' },
            { key: 'discharge', name: 'Discharge Workflow' },
        ],
    },
    admin: {
        name: 'Administration',
        description: 'Handle administrative tasks including HR, IT, and compliance.',
        icon: BuildingLibraryIcon,
        modules: [
            { key: 'hr', name: 'Human Resources' },
            { key: 'it', name: 'IT Support' },
            { key: 'complaints', name: 'Complaints' },
        ],
    },
    support: {
        name: 'Support Services',
        description: 'Manage housekeeping, waste, laundry, and sterilization services.',
        icon: CircleStackIcon,
        modules: [
            { key: 'housekeeping', name: 'Housekeeping' },
            { key: 'cssd', name: 'CSSD' },
            { key: 'laundry', name: 'Laundry' },
        ],
    },
    specialized: {
        name: 'Specialized Units',
        description: 'Coordinate mortuary, transplant, and narcotics management.',
        icon: BeakerIcon,
        modules: [
            { key: 'mortuary', name: 'Mortuary' },
            { key: 'transplant', name: 'Transplant Coordination' },
            { key: 'narcotics', name: 'Narcotics Control' },
        ],
    },
    compliance: {
        name: 'Compliance & Legal',
        description: 'Track licenses, compliance tasks, and manage A/V content.',
        icon: DocumentCheckIcon,
        modules: [
            { key: 'compliance', name: 'Licenses' },
            { key: 'av', name: 'A/V Content' },
            { key: 'performance', name: 'Performance' },
        ],
    },
};