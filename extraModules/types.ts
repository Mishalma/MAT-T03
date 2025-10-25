
import React from 'react';

// General UI Types
export interface Module {
    key: string;
    name: string;
}

export interface ServiceCategory {
    name: string;
    description: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    modules: Module[];
}

// Gemini Service Types
export interface BreakdownAnalysis {
    priority: 'High' | 'Medium' | 'Low';
    summary: string;
}

export enum FeedbackSentiment {
    Positive = "Positive",
    Neutral = "Neutral",
    Negative = "Negative",
}

// Equipment Module Types
export enum EquipmentStatus {
    Online = 'Online',
    Maintenance = 'Maintenance',
    Offline = 'Offline',
}

export interface ServiceLog {
    date: string;
    type: 'Scheduled' | 'Breakdown';
    notes: string;
    performedBy: string;
}

export interface Equipment {
    id: string;
    name: string;
    type: string;
    location: string;
    status: EquipmentStatus;
    purchaseDate: string;
    nextServiceDate: string;
    serviceHistory: ServiceLog[];
}

export interface WorkOrder {
    id: string;
    equipmentId: string;
    equipmentName: string;
    issue: string;
    status: 'Open' | 'In Progress' | 'Completed';
    priority: 'High' | 'Medium' | 'Low';
    reportedDate: string;
}

// Gas Module Types
export enum GasType {
    Oxygen = "Oxygen",
    Nitrogen = "Nitrogen",
    "Carbon Dioxide" = "Carbon Dioxide",
    "Medical Air" = "Medical Air",
}

export enum GasCylinderStatus {
    Full = "Full",
    InUse = "In Use",
    Empty = "Empty",
}

export interface GasCylinder {
    id: string;
    type: GasType;
    size: 'E' | 'H' | 'M';
    location: string;
    status: GasCylinderStatus;
    lastFillDate: string;
}

export interface GasRequest {
    id: string;
    department: string;
    gasType: GasType;
    size: 'E' | 'H' | 'M';
    quantity: number;
    requestDate: string;
    status: 'Pending' | 'Approved' | 'Delivered';
}

// Porter Module Types
export enum PorterStatus {
    Available = "Available",
    Busy = "Busy",
    OnBreak = "On Break",
}

export interface Porter {
    id: string;
    name: string;
    status: PorterStatus;
}

export interface TransportRequest {
    id: string;
    patientName: string;
    from: string;
    to: string;
    priority: 'Urgent' | 'Standard';
    status: 'Pending' | 'In Progress' | 'Completed';
    requestTime: string;
    assignedPorterId?: string;
}

// Feedback Module
export enum FeedbackType {
    General = 'General',
    Billing = 'Billing',
    Care = 'Care',
    Facilities = 'Facilities',
}

export enum FeedbackStatus {
    Open = 'Open',
    Acknowledged = 'Acknowledged',
    Resolved = 'Resolved',
}

export interface Feedback {
    id: string;
    patientName: string;
    type: FeedbackType;
    description: string;
    date: string;
    sentiment: FeedbackSentiment;
    status: FeedbackStatus;
}

// Lab Module
export interface LabTest {
    id: string;
    name: string;
    value: string;
    referenceRange: string;
    isAbnormal: boolean;
}

export interface LabResult {
    id: string;
    patientName: string;
    patientId: string;
    testType: string;
    status: 'Completed' | 'Pending' | 'Cancelled';
    collectionDate: string;
    tests: LabTest[];
}

// Discharge Module
export enum ClearanceStatus {
    Pending = 'Pending',
    Approved = 'Approved',
    Flagged = 'Flagged',
}
export interface Clearance {
    status: ClearanceStatus;
    notes: string;
    updatedBy?: string;
    updatedAt?: string;
}
export interface DischargeProcess {
    id: string;
    patientName: string;
    patientId: string;
    pharmacy: Clearance;
    billing: Clearance;
    nursing: Clearance;
}

export interface TranscriptionRequest {
    id: string;
    patientName: string;
    patientId: string;
    status: 'Pending' | 'Transcribing' | 'Completed';
    requestTime: string;
}


// Accreditation Module Types
export interface License {
    id: string;
    name: string;
    personnel: string;
    issuingAuthority: string;
    issueDate: string;
    expiryDate: string;
    status: 'Active' | 'Expiring Soon' | 'Expired';
}

export interface ComplianceTask {
    id: string;
    description: string;
    dueDate: string;
    status: 'Pending' | 'Completed';
    relatedLicenseId?: string;
}


// AV Module
export interface AVContent {
    id: string;
    title: string;
    type: 'Video' | 'Audio' | 'Image';
    description: string;
    uploadDate: string;
    uploadedBy: string;
    status: 'Processing' | 'Available' | 'Archived';
}

// Housekeeping Module
export interface HousekeepingTask {
    id: string;
    location: string;
    task: string;
    priority: 'High' | 'Medium' | 'Low';
    status: 'Pending' | 'Completed';
    assignedTo: string;
}

export interface WasteCollection {
    id: string;
    type: 'General' | 'Biohazard' | 'Sharps';
    location: string;
    collectionDate: string;
    weightKg: number;
}

// Complaints Module
export interface Complaint {
    id: string;
    complainant: string;
    department: string;
    description: string;
    date: string;
    status: 'New' | 'Investigating' | 'Resolved';
    priority: 'High' | 'Medium' | 'Low';
}

// IT Module
export interface ITSupportTicket {
    id: string;
    user: string;
    department: string;
    issue: string;
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
    status: 'Open' | 'In Progress' | 'Closed';
    date: string;
}

// Mortuary Module
export interface MortuaryCase {
    id: string;
    deceasedName: string;
    dateOfDeath: string;
    dateOfAdmission: string;
    status: 'Awaiting Release' | 'Released' | 'Post-mortem';
    storageLocation: string;
}

// Transplant Module
export interface TransplantCase {
    id: string;
    patientName: string;
    organ: string;
    status: 'Pending' | 'In Progress' | 'Completed' | 'Cancelled';
    priority: 'Urgent' | 'Standard';
    matchDate: string;
}

// CSSD Module
export interface CSSDRequest {
    id: string;
    department: string;
    item: string;
    quantity: number;
    requestDate: string;
    status: 'Pending' | 'Processing' | 'Completed';
}

// Laundry Module
export interface LaundryRequest {
    id: string;
    department: string;
    item: 'Bed Linens' | 'Gowns' | 'Towels' | 'Scrubs';
    quantity: number;
    requestDate: string;
    status: 'Pending' | 'In Progress' | 'Completed';
}

// HR Module
export interface Employee {
    id: string;
    name: string;
    department: string;
    role: string;
    hireDate: string;
    status: 'Active' | 'On Leave' | 'Terminated';
}

export interface TrainingSession {
    id: string;
    title: string;
    date: string;
    attendees: string[]; // array of employee IDs
}

// Performance Module
export interface PerformanceReview {
    id: string;
    employeeId: string;
    employeeName: string;
    reviewDate: string;
    status: 'Pending' | 'In Progress' | 'Completed';
    summary: string;
}

// Narcotics Module
export interface Narcotic {
    id: string;
    name: string;
    currentStock: number;
    unit: 'mg' | 'ml' | 'patches';
    location: string;
}

export interface NarcoticLog {
    id: string;
    narcoticId: string;
    narcoticName: string;
    transactionType: 'Dispense' | 'Restock' | 'Audit';
    amount: number;
    user: string;
    timestamp: string;
}
