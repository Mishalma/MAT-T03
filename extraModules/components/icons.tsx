
import React from 'react';

// FIX: Change "aria-hidden" value to boolean `true` to match SVGProps type.
const iconProps = {
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": true
};

export const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
);

export const WrenchScrewdriverIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path d="M12.22 5.803a.75.75 0 00-1.06-1.06l-5.163 5.163a2.25 2.25 0 00-.658 1.591v2.412a2.25 2.25 0 002.25 2.25h2.412a2.25 2.25 0 001.591-.658l5.163-5.163a.75.75 0 00-1.06-1.06l-2.457 2.457-1.414-1.414 2.457-2.457zM5.5 16.5a1 1 0 100-2 1 1 0 000 2z" />
        <path d="M13.25 3.5a.75.75 0 000 1.06l.883.884-1.06 1.06-.883-.884a.75.75 0 10-1.06 1.06l.883.884-1.06 1.06-.883-.884a.75.75 0 10-1.06 1.06l.883.884-1.06 1.06-.883-.884a.75.75 0 00-1.06 1.06l3.182 3.182a.75.75 0 001.06 0l3.182-3.182a.75.75 0 000-1.06l-.883-.884 1.06-1.06.883.884a.75.75 0 101.06-1.06l-.883-.884 1.06-1.06.883.884a.75.75 0 101.06-1.06l-3.182-3.182a.75.75 0 00-1.06 0L13.25 3.5z" />
    </svg>
);

export const ExclamationTriangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path fillRule="evenodd" d="M8.257 3.099a.75.75 0 011.486 0l5.25 9.75a.75.75 0 01-.643 1.151H3.65a.75.75 0 01-.643-1.151l5.25-9.75zM9 8a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1zm1 5a1 1 0 10-2 0 1 1 0 002 0z" clipRule="evenodd" />
    </svg>
);

export const ArrowDownTrayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props} className="h-4 w-4">
        <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V3.75A.75.75 0 0110 3zM5.22 11.78a.75.75 0 001.06 0L10 8.06l3.72 3.72a.75.75 0 101.06-1.06l-4.25-4.25a.75.75 0 00-1.06 0L5.22 10.72a.75.75 0 000 1.06z" clipRule="evenodd" />
        <path d="M3.5 14.75a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13z" />
    </svg>
);


export const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props} className="h-6 w-6">
        <path fillRule="evenodd" d="M10 8.586L5.707 4.293a1 1 0 00-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 101.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10l4.293-4.293a1 1 0 00-1.414-1.414L10 8.586z" clipRule="evenodd" />
    </svg>
);

export const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
);

export const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path d="M7 8a3 3 0 100-6 3 3 0 000 6zm-5 8a5 5 0 0110 0H2zm13-8a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-4 8a5.5 5.5 0 0111 0h-11z" />
    </svg>
);

export const BeakerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props} className="h-6 w-6">
        <path fillRule="evenodd" d="M3.75 3a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75zM4 6.75A.75.75 0 014.75 6h10.5a.75.75 0 01.75.75v8.5a2.25 2.25 0 01-2.25 2.25H6.25a2.25 2.25 0 01-2.25-2.25v-8.5zM6 14.5a.5.5 0 000 1h8a.5.5 0 000-1H6z" clipRule="evenodd" />
    </svg>
);

export const DocumentTextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm2 5a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h4a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
);

export const DocumentCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
         <path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z" opacity="0.25"/>
    </svg>
);

export const BuildingLibraryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props} fill="none">
        <path d="M2 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 18V6a2 2 0 012-2h8a2 2 0 012 2v12" stroke="currentColor" strokeWidth="2" />
        <path d="M8 18V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CircleStackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
        <path d="M4 10a6 6 0 1112 0 6 6 0 01-12 0z" opacity="0.5"/>
        <path d="M7 10a3 3 0 116 0 3 3 0 01-6 0z" opacity="0.75"/>
    </svg>
);

export const ClipboardDocumentListIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path d="M9 2a1 1 0 011-1h4a1 1 0 011 1v1h1a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h1V3a1 1 0 011-1h4zM9 4V3h2v1H9z" />
        <path d="M6 8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h4a1 1 0 100-2H7z" />
    </svg>
);

export const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path fillRule="evenodd" d="M10 18l-1.45-1.316C3.59 12.35 2 10.364 2 8.09 2 5.927 3.927 4 6.09 4c1.336 0 2.59.736 3.91 1.891C11.32 4.736 12.573 4 13.91 4 16.073 4 18 5.927 18 8.09c0 2.273-1.59 4.26-6.55 8.594L10 18z" clipRule="evenodd" />
    </svg>
);
