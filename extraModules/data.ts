
import {
  Equipment, EquipmentStatus, WorkOrder, GasCylinder, GasCylinderStatus, GasType, GasRequest, Porter, PorterStatus, TransportRequest, Feedback, FeedbackType, FeedbackSentiment, FeedbackStatus, LabResult, DischargeProcess, ClearanceStatus, TranscriptionRequest, License, ComplianceTask, AVContent, HousekeepingTask, WasteCollection, Complaint, ITSupportTicket, MortuaryCase, TransplantCase, CSSDRequest, LaundryRequest, Employee, TrainingSession, PerformanceReview, Narcotic, NarcoticLog
} from './types';

export const equipmentData: Equipment[] = [
  { id: 'EQ-001', name: 'Ventilator', type: 'Life Support', location: 'ICU-1', status: EquipmentStatus.Online, purchaseDate: '2022-01-15', nextServiceDate: '2024-08-01', serviceHistory: [] },
  { id: 'EQ-002', name: 'Defibrillator', type: 'Cardiac', location: 'ER-3', status: EquipmentStatus.Online, purchaseDate: '2021-11-20', nextServiceDate: '2024-09-15', serviceHistory: [] },
  { id: 'EQ-003', name: 'X-Ray Machine', type: 'Imaging', location: 'Radiology', status: EquipmentStatus.Maintenance, purchaseDate: '2020-05-10', nextServiceDate: '2024-07-20', serviceHistory: [] },
  { id: 'EQ-004', name: 'Ultrasound Scanner', type: 'Imaging', location: 'Maternity', status: EquipmentStatus.Offline, purchaseDate: '2019-02-25', nextServiceDate: '2024-06-30', serviceHistory: [] },
];

export const workOrdersData: WorkOrder[] = [
  { id: 'WO-001', equipmentId: 'EQ-004', equipmentName: 'Ultrasound Scanner', issue: 'Power supply failure. Unit is completely unresponsive.', status: 'Open', priority: 'High', reportedDate: '2024-07-18' },
  { id: 'WO-002', equipmentId: 'EQ-003', equipmentName: 'X-Ray Machine', issue: 'Routine maintenance and calibration.', status: 'In Progress', priority: 'Medium', reportedDate: '2024-07-15' },
];

export const gasCylindersData: GasCylinder[] = [
  { id: 'GAS-O2-01', type: GasType.Oxygen, size: 'H', location: 'OR-1', status: GasCylinderStatus.InUse, lastFillDate: '2024-07-01' },
  { id: 'GAS-N2-01', type: GasType.Nitrogen, size: 'M', location: 'Lab', status: GasCylinderStatus.Full, lastFillDate: '2024-06-20' },
  { id: 'GAS-O2-02', type: GasType.Oxygen, size: 'E', location: 'Ambulance-1', status: GasCylinderStatus.Empty, lastFillDate: '2024-05-10' },
];

export const gasRequestsData: GasRequest[] = [
    { id: 'GR-001', department: 'ICU', gasType: GasType.Oxygen, size: 'H', quantity: 5, requestDate: '2024-07-18', status: 'Pending' }
];

export const portersData: Porter[] = [
    { id: 'P-01', name: 'John Doe', status: PorterStatus.Available },
    { id: 'P-02', name: 'Jane Smith', status: PorterStatus.Busy },
    { id: 'P-03', name: 'Mike Ross', status: PorterStatus.OnBreak },
];

export const transportRequestsData: TransportRequest[] = [
    { id: 'TR-001', patientName: 'Alice Johnson', from: 'ER', to: 'Radiology', priority: 'Urgent', status: 'Pending', requestTime: '10:30 AM' },
    { id: 'TR-002', patientName: 'Bob Williams', from: 'ICU-2', to: 'OR-3', priority: 'Standard', status: 'In Progress', requestTime: '10:15 AM', assignedPorterId: 'P-02' },
];

export const feedbackData: Feedback[] = [
    { id: 'FB-001', patientName: 'Charlie Brown', type: FeedbackType.Care, description: 'The nursing staff was incredibly attentive and kind.', date: '2024-07-17', sentiment: FeedbackSentiment.Positive, status: FeedbackStatus.Resolved },
    { id: 'FB-002', patientName: 'Diana Prince', type: FeedbackType.Billing, description: 'I was confused about a charge on my bill.', date: '2024-07-18', sentiment: FeedbackSentiment.Negative, status: FeedbackStatus.Open },
];

export const labResultsData: LabResult[] = [
    { id: 'LR-001', patientName: 'Eva Green', patientId: 'PID-112233', testType: 'Complete Blood Count', status: 'Completed', collectionDate: '2024-07-17', tests: [{id: 't1', name: 'WBC', value: '8.5 K/uL', referenceRange: '4.5-11.0', isAbnormal: false}]},
    { id: 'LR-002', patientName: 'Frank White', patientId: 'PID-445566', testType: 'Lipid Panel', status: 'Pending', collectionDate: '2024-07-18', tests: []},
];

export const dischargeData: DischargeProcess[] = [
    { id: 'DP-001', patientName: 'Grace Hopper', patientId: 'PID-778899', pharmacy: {status: ClearanceStatus.Approved, notes: 'All meds dispensed.'}, billing: {status: ClearanceStatus.Flagged, notes: 'Outstanding balance of $50.'}, nursing: {status: ClearanceStatus.Pending, notes: 'Awaiting final vitals check.'}},
];

export const transcriptionData: TranscriptionRequest[] = [
    { id: 'TRQ-001', patientName: 'Henry Ford', patientId: 'PID-123123', status: 'Pending', requestTime: '11:00 AM' }
];

export const licenseData: License[] = [];
export const complianceTaskData: ComplianceTask[] = [];
export const avContentData: AVContent[] = [];
export const housekeepingTaskData: HousekeepingTask[] = [];
export const wasteCollectionData: WasteCollection[] = [];
export const complaintsData: Complaint[] = [];
export const itSupportTicketData: ITSupportTicket[] = [];
export const mortuaryCaseData: MortuaryCase[] = [];
export const transplantCaseData: TransplantCase[] = [];
export const cssdRequestData: CSSDRequest[] = [];
export const laundryRequestData: LaundryRequest[] = [];
export const employeeData: Employee[] = [];
export const trainingSessionData: TrainingSession[] = [];
export const performanceReviewData: PerformanceReview[] = [];
export const narcoticsInventoryData: Narcotic[] = [];
export const narcoticsLogData: NarcoticLog[] = [];
