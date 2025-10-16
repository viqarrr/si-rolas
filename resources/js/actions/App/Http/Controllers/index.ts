import PartnershipController from './PartnershipController'
import JobPostingController from './JobPostingController'
import Auth from './Auth'
import CompanyDashboardController from './CompanyDashboardController'
import DashboardController from './DashboardController'
import VisionMissionController from './VisionMissionController'
import OrganizationalStructureController from './OrganizationalStructureController'
import HistoryController from './HistoryController'
import PostController from './PostController'
import MajorController from './MajorController'
import WorkController from './WorkController'
import ContactController from './ContactController'
import InquiryController from './InquiryController'
import Settings from './Settings'

const Controllers = {
    PartnershipController: Object.assign(PartnershipController, PartnershipController),
    JobPostingController: Object.assign(JobPostingController, JobPostingController),
    Auth: Object.assign(Auth, Auth),
    CompanyDashboardController: Object.assign(CompanyDashboardController, CompanyDashboardController),
    DashboardController: Object.assign(DashboardController, DashboardController),
    VisionMissionController: Object.assign(VisionMissionController, VisionMissionController),
    OrganizationalStructureController: Object.assign(OrganizationalStructureController, OrganizationalStructureController),
    HistoryController: Object.assign(HistoryController, HistoryController),
    PostController: Object.assign(PostController, PostController),
    MajorController: Object.assign(MajorController, MajorController),
    WorkController: Object.assign(WorkController, WorkController),
    ContactController: Object.assign(ContactController, ContactController),
    InquiryController: Object.assign(InquiryController, InquiryController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers