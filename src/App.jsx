import React, { useState, useEffect } from 'react';
import {
    Building2, Trees, TrendingUp, Calculator,
    FileText, ShieldCheck, ChevronDown, ChevronRight,
    Info, ArrowRight, Briefcase, Landmark, Printer, Download
} from 'lucide-react';

// --- DATA: INSIGHTS & STATS ---
const insights = [
    { label: "Minimum Age", value: "25 Years", icon: <Building2 className="w-6 h-6" /> },
    { label: "Min. Land Area", value: "1,500 sqm", icon: <Trees className="w-6 h-6" /> },
    { label: "Free Extra FAR", value: "+1.0", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Dev Charge Exemption", value: "50%", icon: <Landmark className="w-6 h-6" /> }
];

export default function App() {
    const [activeTab, setActiveTab] = useState('english');

    return (
        <div className="min-h-screen bg-slate-100 font-sans text-slate-800 selection:bg-blue-200">
            {/* Header */}
            <header className="bg-slate-900 text-white shadow-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                        <ShieldCheck className="w-8 h-8 text-blue-400" />
                        <div>
                            <h1 className="text-xl font-bold tracking-wide">UP Redevelopment Policy 2026</h1>
                            <p className="text-xs text-slate-400 uppercase tracking-wider">Govt. of Uttar Pradesh - Interactive Portal</p>
                        </div>
                    </div>
                    <nav className="flex flex-wrap gap-1 bg-slate-800 p-1.5 rounded-xl border border-slate-700 shadow-inner">
                        {[
                            { id: 'insights', label: 'Insights' },
                            { id: 'simulator', label: 'FAR Simulator' },
                            { id: 'english', label: 'Read Policy (English)' },
                            { id: 'hindi', label: 'Read Policy (Hindi)' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {activeTab === 'insights' && <InsightsTab />}
                {activeTab === 'simulator' && <SimulatorTab />}
                {activeTab === 'english' && <FullPolicyEnglishTab />}
                {activeTab === 'hindi' && <FullPolicyHindiTab />}
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800 mt-12">
                <p>© 2026 Uttar Pradesh Urban Redevelopment Portal. Developed for interactive reading and simulation.</p>
            </footer>
        </div>
    );
}

// --- TABS COMPONENTS ---

function InsightsTab() {
    return (
        <div className="space-y-8 animate-fadeIn">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden relative text-white border border-blue-800">
                <div className="md:w-1/2 z-10">
                    <h2 className="text-4xl font-extrabold mb-4 leading-tight">Transforming Urban Spaces</h2>
                    <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                        The UP Urban Redevelopment Policy 2026 aims to revitalize dilapidated buildings, prevent urban decay, and create sustainable, vibrant communities through generous incentives and streamlined approvals.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-green-500/20 text-green-300 border border-green-500/30">
                            Active Policy
                        </span>
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                            Single Window Clearance
                        </span>
                    </div>
                </div>
                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center z-10">
                    <CityAnimation />
                </div>
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] opacity-20 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
            </div>

            {/* Key Facts Grid */}
            <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg"><Info className="w-6 h-6 text-blue-700" /></div>
                <h3 className="text-2xl font-bold text-slate-800">Key Policy Facts</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {insights.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center space-x-5 hover:shadow-lg transition-shadow duration-300 group">
                        <div className="p-4 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">{stat.label}</p>
                            <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Infographic Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden">
                    <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center">
                        <Briefcase className="w-5 h-5 mr-3 text-indigo-500" />
                        Why Redevelop?
                    </h3>
                    <ul className="space-y-5 relative z-10">
                        {[
                            "Eradicate hazardous and unhygienic living conditions",
                            "Optimize 'underutilized' prime urban land",
                            "Boost state economic growth & real estate sectors",
                            "Provide free transit accommodation to residents during rebuild"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <ArrowRight className="w-5 h-5 mr-3 text-indigo-500 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold mb-8 text-slate-800 flex items-center">
                        <Landmark className="w-5 h-5 mr-3 text-green-500" />
                        Fee Waivers & Financial Aid
                    </h3>
                    <div className="space-y-8">
                        <ProgressBar label="Development Charge Exemption" percentage={50} color="bg-green-500" />
                        <ProgressBar label="Land Use Change Fee Exemption" percentage={25} color="bg-blue-500" />
                        <ProgressBar label="Stamp Duty Exemption (Original Allottees)" percentage={100} color="bg-indigo-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function SimulatorTab() {
    const [plotArea, setPlotArea] = useState(2000);
    const [baseFar, setBaseFar] = useState(1.5);

    // Calculations based on policy
    const bonusFar = 1.0; // Free FAR incentive
    const totalFar = Number(baseFar) + bonusFar;
    const oldBuiltUpArea = plotArea * baseFar;
    const newBuiltUpArea = plotArea * totalFar;
    const extraArea = newBuiltUpArea - oldBuiltUpArea;
    const commercialAllowance = newBuiltUpArea * 0.05; // 5% extra commercial allowance

    return (
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-12 animate-fadeIn max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 border-b border-slate-100 pb-8">
                <div className="flex items-center space-x-4">
                    <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl">
                        <Calculator className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900">FAR Simulator</h2>
                        <p className="text-slate-500 font-medium mt-1">Calculate the physical benefits of the Redevelopment Policy</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Controls */}
                <div className="space-y-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <label className="flex justify-between text-sm font-bold text-slate-700 mb-4">
                            <span>Plot Area</span>
                            <span className="text-indigo-600">{plotArea.toLocaleString()} sq. meters</span>
                        </label>
                        <input
                            type="range"
                            min="1500" max="10000" step="100"
                            value={plotArea}
                            onChange={(e) => setPlotArea(Number(e.target.value))}
                            className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                        {plotArea < 1500 && <p className="text-red-500 text-sm mt-2 font-medium">Policy requires minimum 1500 sqm.</p>}
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <label className="flex justify-between text-sm font-bold text-slate-700 mb-4">
                            <span>Current Base FAR</span>
                            <span className="text-indigo-600">{baseFar.toFixed(1)}</span>
                        </label>
                        <input
                            type="range"
                            min="1.0" max="3.0" step="0.1"
                            value={baseFar}
                            onChange={(e) => setBaseFar(Number(e.target.value))}
                            className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                    </div>

                    <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                        <h4 className="font-bold text-indigo-900 mb-3 flex items-center">
                            <ShieldCheck className="w-5 h-5 mr-2" /> Applied Policy Perks:
                        </h4>
                        <ul className="text-sm text-indigo-800 space-y-2 font-medium">
                            <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> +1.0 Free Additional FAR (Section 9.6)</li>
                            <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> 5% Extra Commercial Use Area (Section 9.7)</li>
                            <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Amalgamation Fee Waived (Section 9.3)</li>
                        </ul>
                    </div>
                </div>

                {/* Results Visualization */}
                <div className="flex flex-col justify-center space-y-8">
                    <div className="grid grid-cols-2 gap-4">
                        <ResultBox label="Old Built-up Limit" value={`${oldBuiltUpArea.toLocaleString()} sqm`} />
                        <ResultBox label="New Built-up Limit" value={`${newBuiltUpArea.toLocaleString()} sqm`} highlight />
                        <ResultBox label="Net Area Gained" value={`+${extraArea.toLocaleString()} sqm`} color="text-emerald-600" />
                        <ResultBox label="New Comm. Allowance" value={`${commercialAllowance.toLocaleString()} sqm`} />
                    </div>

                    {/* Visual Bar Comparison */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <p className="text-sm font-bold text-slate-700 mb-6 text-center uppercase tracking-wider">Volume Comparison</p>
                        <div className="h-40 flex items-end justify-center space-x-8 border-b-2 border-slate-200 pb-2">
                            <div className="w-24 bg-slate-300 rounded-t-xl transition-all duration-500 relative flex items-end justify-center pb-3 text-sm font-bold text-slate-600 shadow-inner" style={{ height: `${(oldBuiltUpArea / newBuiltUpArea) * 100}%` }}>
                                Before
                            </div>
                            <div className="w-24 bg-gradient-to-t from-indigo-600 to-blue-500 rounded-t-xl transition-all duration-500 relative flex items-end justify-center pb-3 text-sm font-bold text-white shadow-xl" style={{ height: '100%' }}>
                                After
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- DOCUMENT VIEWER COMPONENTS ---

function SectionTitle({ children }) {
    return <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 border-b border-slate-200 pb-2">{children}</h3>;
}

function SubSectionTitle({ children }) {
    return <h4 className="text-lg font-bold text-slate-800 mt-6 mb-3">{children}</h4>;
}

function Paragraph({ children }) {
    return <p className="text-slate-700 leading-relaxed mb-4 text-justify">{children}</p>;
}

function List({ children, ordered = false }) {
    const Tag = ordered ? 'ol' : 'ul';
    const listClass = ordered ? 'list-decimal pl-6 space-y-3 mb-6 text-slate-700 text-justify' : 'list-disc pl-6 space-y-3 mb-6 text-slate-700 text-justify';
    return <Tag className={listClass}>{children}</Tag>;
}

// --- FULL ENGLISH POLICY ---
function FullPolicyEnglishTab() {
    return (
        <div className="max-w-4xl mx-auto animate-fadeIn">
            {/* Action Bar */}
            <div className="flex justify-end mb-4 space-x-4">
                <button onClick={() => window.print()} className="flex items-center text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
                    <Printer className="w-4 h-4 mr-2" /> Print
                </button>
            </div>

            {/* Document Container */}
            <div className="bg-white shadow-2xl border border-slate-300 p-8 md:p-16 relative">
                {/* Meta Info Header */}
                <div className="text-sm font-semibold text-slate-600 mb-8 flex flex-col md:flex-row justify-between">
                    <div>
                        <p>8-3099/313/2024-Housing and Urban Planning Section-3</p>
                        <p>1/1231214/2026</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-left md:text-right">
                        <p>Lucknow: Dated 10 February, 2026</p>
                    </div>
                </div>

                <div className="mb-8">
                    <p className="font-bold">From,</p>
                    <p className="ml-4">P. Guruprasad<br />Principal Secretary,<br />Government of Uttar Pradesh.</p>
                    <p className="font-bold mt-4">To,</p>
                    <ol className="list-decimal ml-8">
                        <li>Housing Commissioner,<br />U.P. Housing and Development Board, Lucknow.</li>
                        <li className="mt-2">Vice Chairman,<br />All Development Authorities, Uttar Pradesh.</li>
                    </ol>
                </div>

                <div className="bg-slate-100 p-4 border-l-4 border-slate-800 mb-8 font-bold text-lg text-slate-800">
                    Subject: Regarding the implementation of the Uttar Pradesh Urban Redevelopment Policy, 2026.
                </div>

                <Paragraph>Sir,</Paragraph>
                <Paragraph>
                    Urbanization is spreading rapidly in the state. Due to employment and other reasons, the rural population is increasingly attracted to urban areas, leading to continuous urban sprawl. Along with the expansion of urban areas, the aging and dilapidation of previously developed areas—especially buildings and constructed structures—is a natural process over time. Consequently, such areas are falling prey to urban decay, creating a dilemma: despite high land prices and immense development potential, these properties lie &apos;underutilized&apos;, which could otherwise contribute significantly to the economic development of the cities. The increasingly hazardous and unhygienic environment in old and dilapidated schemes adversely affects the quality of life of residents and businesses, increasing the probability of accidents in such areas. In such a scenario, when repairing buildings is no longer a viable option, redevelopment remains the only solution.
                </Paragraph>
                <Paragraph>
                    To accommodate the growing urbanization, increase housing supply, strengthen/augment infrastructure facilities, improve living and working conditions, promote the development of affordable housing, control urban sprawl through optimal use of urban land, and encourage opportunities to adopt energy-efficient building designs and sustainable building practices, redevelopment is essential. This will not only generate employment in manufacturing, real estate, and allied sectors but also attract investment, thereby boosting the state&apos;s economic development.
                </Paragraph>
                <Paragraph>
                    2- Keeping the above-mentioned situation in view, after due consideration by the Government, with the objective of enhancing the overall welfare of citizens, ensuring sustainable urban development through the strengthening/augmentation of physical and social infrastructure, and transforming old, dilapidated, and unsafe buildings into vibrant, inclusive, and sustainable communities, the <strong>Uttar Pradesh Urban Redevelopment Policy, 2026</strong> is hereby determined as follows:
                </Paragraph>

                <SectionTitle>1. Eligibility for Redevelopment Scheme:</SectionTitle>
                <List>
                    <li><strong>1.1</strong> All types of public and private sector schemes that are a minimum of 25 years old or have been granted permission for redevelopment by the Government Agency based on a &apos;Structural Audit&apos; report.<br />
                        <span className="block mt-2 text-sm bg-blue-50 p-2 border-l-2 border-blue-400"><em>Explanation: &apos;Government Agency&apos; implies the agency within whose jurisdiction the redevelopment scheme is located.</em></span>
                    </li>
                    <li><strong>1.2</strong> Schemes of a Housing Society or Apartment Owners Association (AOA) that are a minimum of 25 years old and where a registered Housing Society, Apartment Owners Association, or other &apos;Legal Entity&apos; has already been constituted.</li>
                    <li><strong>1.3</strong> The minimum land area for a redevelopment scheme shall be 1500 square meters.</li>
                    <li><strong>1.4</strong> Single residences/buildings shall not be eligible for redevelopment under this policy.</li>
                    <li><strong>1.5</strong> Land allotted on lease, such as Nazul land, Improvement Trust land, and other government land, which has not been converted to free-hold, shall not be eligible for redevelopment.</li>
                    <li><strong>1.6</strong> Land covered by industrial units that have been closed for the last 03 years or declared sick units by the National Company Law Tribunal (NCLT) or the competent authority, provided the land is undisputed and free from all encumbrances, and permission for its redevelopment has been granted by the Industrial Development Department or the concerned department.</li>
                    <li><strong>1.7</strong> Land covered by industrial units that are &apos;non-conforming&apos; due to pollution or environmental reasons, or wish to relocate elsewhere/to outer areas due to the need for more land for expansion or practical difficulties in operating within the city, and for which permission for redevelopment has been granted by the Industrial Development Department or the concerned department.</li>
                    <li><strong>1.8</strong> Vacant, &apos;underutilized&apos;, or unused land of various Government Departments/Corporations located in the inner parts of the cities.</li>
                    <li><strong>1.9</strong> Areas with substandard structural conditions, &apos;sub-optimal&apos; land use, overcrowding, or lack of proper infrastructure facilities and services.</li>
                    <li><strong>1.10</strong> Other &apos;non-conforming&apos; uses such as prisons, bus terminals/depots (excluding bus stops), and other uses of a similar nature located in densely populated/crowded areas of cities.</li>
                    <li><strong>1.11</strong> This policy shall not apply to Heritage buildings/zones defined under the Master Plan or areas/buildings of this nature declared by any other competent authority, such as the National Monuments Authority, Archaeological Survey of India, or any other agency.</li>
                    <li><strong>1.12</strong> &apos;Redevelopment&apos; generally means the improvement of the physical, economic, social, and environmental conditions of areas/buildings that were previously developed/constructed but have currently become unused, unserviceable, or &apos;underutilized&apos; due to dilapidated structural conditions, &apos;sub-optimal&apos; use of land, or environmental degradation over time.</li>
                </List>

                <SectionTitle>2. Models of Redevelopment Schemes:</SectionTitle>
                <Paragraph>The implementation of redevelopment schemes can be executed based on the following models:</Paragraph>
                <List ordered>
                    <li>Implementation of the redevelopment scheme directly by the Government Agency itself.</li>
                    <li>Implementation of the redevelopment scheme by the Government Agency through Public-Private Partnership (PPP) or a private developer.</li>
                    <li>Implementation of the redevelopment scheme by the Housing Society/Apartment Owners Association in the private sector.</li>
                </List>

                <SubSectionTitle>2.1 Procedure for Implementation of Redevelopment Scheme by Government Agency:</SubSectionTitle>
                <List ordered>
                    <li>An application for redevelopment will be submitted by the Housing Society / Apartment Owners Association to the concerned Government Agency, or the Government Agency itself can propose redevelopment for any eligible scheme.</li>
                    <li>It will be mandatory to obtain the consent of a minimum of two-thirds of the members of the Housing Society / Apartment Owners Association for the redevelopment scheme. Where a Housing Society / AOA has not been formed, it will be mandatory to form an Apartment Owners Association as per the provisions of the Societies Registration Act, 1860 / U.P. Apartment (Promotion of Construction, Ownership and Maintenance) Act, 2010, as the case may be.</li>
                    <li>The Development Authority, Housing and Development Board, Special Area Development Authority, and Controlling Authority Regulated Area, as applicable, shall be the nodal agency for identifying land owned by Government Departments / Corporations. For such land, a redevelopment scheme can be formulated by the Government Department / Corporation itself or through the concerned Government Agency. If inter-departmental coordination is required in planning, the proposal will be submitted for the approval of the concerned Government Department through the District Magistrate / Divisional Commissioner.</li>
                    <li>In cases of lease-allotted properties where the lease period has expired, the consent of the Housing Society / Apartment Owners Association will not be required. Instead, the Government Agency can formulate a redevelopment scheme by initiating &apos;re-entry&apos; proceedings, under which existing occupants will be given preference in the allotment of redeveloped properties.</li>
                    <li>A Preliminary Project Report of the redevelopment scheme will be prepared by the Government Agency, which will include the following details:
                        <ul className="list-[lower-roman] pl-6 mt-2 space-y-1 text-sm">
                            <li>A copy of the resolution passed with the consent of a minimum of two-thirds of the members of the Housing Society / AOA.</li>
                            <li>Certificate of the Government Agency regarding the eligibility of the scheme/buildings.</li>
                            <li>Location of the site, approach road, current land use, current circle rate of the land, total built-up floor area, building height, number of floors, available parking, and any other necessary information.</li>
                            <li>List of beneficiaries and the current &apos;carpet area&apos; or &apos;built-up area&apos; (in square meters) owned by each.</li>
                            <li>Cost estimation of the redevelopment scheme.</li>
                            <li>&apos;Built-up area&apos; or land area (in sq. meters) proposed for &apos;free-sale&apos; to make the scheme financially viable.</li>
                            <li>List of required No Objection Certificates (NOCs) from various departments/agencies.</li>
                            <li>Any other information that may be necessary.</li>
                        </ul>
                    </li>
                    <li>For the implementation of the scheme, an Implementing Agency (e.g., developer, contractor, etc.) may be appointed by the Government Agency as per the rules.</li>
                    <li>A redevelopment agreement shall be executed between the Government Agency, Housing Society/AOA, and the Implementing Agency, the format for which will be issued separately by the Government.</li>
                    <li>The Detailed Project Report (DPR) of the scheme will be prepared by the Government Agency, which will include implementation strategy, &apos;carpet area&apos; or &apos;built-up area&apos; of existing and proposed units, alternative accommodation arrangements or rent payment for existing occupants, augmentation/strengthening of physical and social infrastructure, building specifications, details of &apos;common areas&apos;, project cost, financing arrangements, &apos;performance guarantee&apos;, &apos;implementation schedule&apos;, and &apos;operation and maintenance&apos; provisions.</li>
                    <li>Information regarding the DPR provisions and transit accommodation/rent will be made available to the beneficiaries by the Government Agency.</li>
                    <li>All beneficiaries will be eligible for transit accommodation or agreed rent (where relocation is necessary).</li>
                    <li>After the relocation of the beneficiaries, the implementation of the redevelopment scheme will be initiated by the Government Agency and completed within a period of 03 years. An extension of a maximum of 02 years will be permissible during this period with the approval of the Board.</li>
                    <li>If the scheme is not financially viable, consent for financial contribution must be obtained from the beneficiaries. However, if the scheme still remains unviable, the redevelopment scheme may be abandoned by the Government Agency.</li>
                </List>

                <SubSectionTitle>2.2 Procedure for Implementation via Public-Private Partnership (PPP) or Developer by Government Agency:</SubSectionTitle>
                <List ordered>
                    <li>The procedure for identifying the scheme and obtaining consent from beneficiaries will be as per sub-clauses (1) and (2) of Clause 2.1.</li>
                    <li>After obtaining the Board&apos;s approval regarding the identified redevelopment scheme, a &apos;Private Sector Entity&apos; or Developer will be selected by the Government Agency as per the rules.</li>
                    <li>A tripartite agreement will be executed between the Government Agency, Developer, and Housing Society/AOA for the implementation of the scheme.</li>
                    <li>A Preliminary Project Report as per details in sub-clause (5) of Clause 2.1 and a DPR as per sub-clause (8) of Clause 2.1 will be prepared by the &apos;Private Sector Entity&apos; / Developer, upon which the approval of the Government Agency&apos;s Board will be obtained.</li>
                    <li>Project components and transit accommodation or rent will be finalized while informing the beneficiaries about the DPR of the scheme.</li>
                    <li>The Developer will be solely responsible for obtaining all legal approvals related to the redevelopment and the &apos;free-sale&apos; component.</li>
                    <li>The Developer will initiate the implementation of the scheme immediately after the relocation of the beneficiaries and complete it within 03 years. The Government Agency may grant an extension of a maximum of 02 years.</li>
                    <li>Upon completion of the development/construction work as per the agreement terms, the Developer will have the right to sell/transfer their &apos;free-sale&apos; component proportionally.</li>
                </List>

                <SubSectionTitle>2.3 Procedure for Implementation by Housing Society / AOA in the Private Sector:</SubSectionTitle>
                <List ordered>
                    <li>A resolution will be passed by the Housing Society / AOA with the consent of a minimum of two-thirds of the members/allottees for the implementation of the redevelopment scheme.</li>
                    <li>A Project Management Consultant (PMC) may be appointed by the Housing Society / AOA to prepare the DPR.</li>
                    <li>The DPR will be prepared by the PMC, including the carpet/built-up area allocated to members, transit accommodation/rent, parks, parking, specifications, common areas, infrastructure, corpus fund, bank guarantee, timelines, required NOCs, etc. The DPR will be sent to the Government Agency for information.</li>
                    <li>The PMC will invite offers from Implementing Agencies (contractor, builder, developer), and a suitable developer will be selected with the consent of the AOA&apos;s managing committee. A redevelopment agreement will be executed containing:
                        <ul className="list-[lower-roman] pl-6 mt-2 space-y-1 text-sm">
                            <li>Timeline to complete the scheme.</li>
                            <li>Bank guarantee amount, agreed upon by all parties.</li>
                            <li>Free alternative accommodation or rent until unit handover.</li>
                            <li>Terms for allotting newly constructed additional units to new members and the developer&apos;s right to dispose of them.</li>
                            <li>Carpet/built-up area allotted to each member, decided by mutual consent.</li>
                            <li>Penal provisions or termination processes in case of default.</li>
                            <li>Any other necessary conditions.</li>
                        </ul>
                    </li>
                    <li>Within a maximum of 60 days from the date the DPR is submitted to the Government Agency for information, the site must be vacated by the AOA and made available to the Implementing Agency.</li>
                    <li>The AOA will be responsible for ensuring the developer transfers the redeveloped units to the beneficiaries as per the agreement. The AOA will protect beneficiaries&apos; interests and monitor strict compliance with the agreement.</li>
                    <li>The AOA may arrange financing from banks/financial institutions if necessary.</li>
                    <li>All other actions will be ensured as per the terms of the redevelopment agreement.</li>
                    <li>For industrial land mentioned in Clauses 1.6 & 1.7, implementation will be done by the concerned department/agency via the selected procedure from 2.1, 2.2, or 2.3.</li>
                    <li>If land was conditionally allotted by the Government, due NOC/permission must be obtained from the concerned department before scheme approval.</li>
                </List>

                <SectionTitle>3. Planning Norms:</SectionTitle>
                <List ordered>
                    <li>The planning of the redevelopment scheme will be done as per the standards prescribed in the prevailing building construction and development bye-laws. Considering the condition of existing infrastructure and buildings, relaxation in the said norms may be granted on a &apos;case-to-case&apos; basis with the approval of the Government Agency&apos;s Board.</li>
                    <li>More than one plot or scheme located continuously can be amalgamated for redevelopment, for which no amalgamation fee shall be payable.</li>
                    <li>Existing internal roads, parks, open areas, and other public facilities within the scheme can be replanned, provided a proper linkage of internal roads with major public/master plan roads is ensured.</li>
                    <li>Other planning-related standards will be as per the prevailing building bye-laws.</li>
                </List>

                <SectionTitle>4. Timelines:</SectionTitle>
                <List ordered>
                    <li>Within a maximum of 60 days from the date of approval of the DPR by the Government Agency, the Housing Society / AOA will vacate the project site and hand it over to the Implementing Agency.</li>
                    <li>The Implementing Agency must commence the implementation of the scheme within 12 months from the date of obtaining the AOA&apos;s consent. Under special circumstances, an extension in this timeline can be granted by the Board.</li>
                    <li>Immediately after the relocation of the beneficiaries, the Implementing Agency will start the implementation and complete it within 03 years. A maximum extension of 02 years can be permitted by the Government Agency.</li>
                    <li>The redeveloped units shall be transferred to the beneficiaries within 03 years (or the extended period) from the date of their relocation.</li>
                </List>

                <SectionTitle>5. Transit Accommodation:</SectionTitle>
                <List ordered>
                    <li>From the date of approval of the scheme until the date of handover of the redeveloped units, free &apos;transit accommodation&apos; will be arranged for the beneficiaries by the Implementing Agency.</li>
                    <li>Alternatively, rent equivalent to the prevailing rental rate in the concerned scheme area can be provided, or the rent rate can be mutually decided by the AOA and the Implementing Agency.</li>
                    <li>The cost of &apos;transit accommodation&apos; or rent will be borne by the Implementing Agency.</li>
                    <li>The relocation of beneficiaries can be done in a phased manner.</li>
                    <li>If there is a delay in handing over the redeveloped units, penalties will be imposed on the responsible party as per the agreement terms.</li>
                </List>

                <SectionTitle>6. Legal Approvals and Fee Liability:</SectionTitle>
                <List ordered>
                    <li>The Implementing Agency will be responsible for obtaining all legal approvals related to the redevelopment scheme.</li>
                    <li>At the time of approval, the Developer/Implementing Agency must pay the applicable fees to the Government Agency, in which exemptions up to the limits defined under this policy will be permissible.</li>
                    <li>Relevant provisions of the U.P. Apartment Act, 2010, will be strictly followed in the structure, implementation, and maintenance of the scheme.</li>
                    <li>It will be mandatory to register the redevelopment scheme with U.P. RERA under prevailing rules.</li>
                    <li>Various Government Departments/Agencies (Urban Development, Revenue, Stamp and Registration, Environment, Fire, Industrial Development, PWD, etc.) will make necessary provisions in their rules to issue approvals/NOCs under this policy.</li>
                </List>

                <SectionTitle>7. Allotment / Transfer of Redeveloped Units:</SectionTitle>
                <List ordered>
                    <li>In the case of leasehold land that has not been made freehold, the redevelopment will be done according to the lease terms, and the developed properties will be transferred on a leasehold basis only.</li>
                    <li>The redeveloped units will be transferred directly to the beneficiaries, while the undivided share of &apos;Common Areas&apos; and facilities will be transferred to the Housing Society / AOA. No stamp duty shall be payable on the transfer of common areas to the AOA.</li>
                    <li>The &apos;carpet area&apos; or &apos;built-up area&apos; of the redeveloped units will be determined by mutual consent among the AOA, Implementing Agency, and beneficiaries. Allotment of units will ideally be at their original location (e.g., floor, direction, corner, road/park facing). If not possible, allotment will be done by mutual consent or via a lottery.</li>
                </List>

                <SectionTitle>8. Operation and Maintenance:</SectionTitle>
                <List ordered>
                    <li>The procedures and conditions for operation and maintenance will be defined in the agreement. The Implementing Agency will maintain the scheme from the date of receiving the completion certificate until it is handed over to the AOA.</li>
                    <li>The Implementing Agency will be liable to rectify any defects/shortcomings regarding the structural stability of the redeveloped buildings for the next 02 years.</li>
                </List>

                <SectionTitle>9. Incentives for Scheme Viability:</SectionTitle>
                <List ordered>
                    <li>A 50% exemption will be permissible on the liability of Development Charges.</li>
                    <li>A 25% exemption will be given for conversion from &apos;lower land use&apos; to &apos;higher land use&apos;, and the process will be done as per rules.</li>
                    <li>Amalgamation of multiple plots/properties will be facilitated, and no amalgamation fee will be charged.</li>
                    <li>No stamp duty shall be payable on the registration of the sale deed in favor of the original allottees/legal occupants. However, if the unit area exceeds the original area, standard stamp duty will apply to the increased portion. New allottees will pay standard stamp duty.</li>
                    <li>Exemption will be granted from the mandatory construction of 10-10% EWS and LIG units or the payment of shelter fees.</li>
                    <li>In addition to the basic FAR permissible under building bye-laws, an additional 1.0 FAR will be permissible free of cost, against which a proportional increase in density will be allowed. Further purchasable FAR will also be allowed as per rules over the basic FAR.</li>
                    <li>In residential redevelopment schemes, an additional 5% area beyond the permissible limit for commercial use will be allowed.</li>
                    <li>A &apos;Single Window Clearance&apos; system will be ensured for scheme approvals.</li>
                </List>

                <SectionTitle>10. Role of Housing Society / Apartment Owners Association:</SectionTitle>
                <List ordered>
                    <li>Ensure the process of obtaining consent from members for the redevelopment scheme.</li>
                    <li>Appoint a Project Management Consultant (PMC) to prepare the DPR.</li>
                    <li>Define a standard procedure for selecting the Implementing Agency, upon which the consent of two-thirds of the members must be obtained.</li>
                    <li>Regularly share all information regarding the scheme (e.g., meeting dates, decisions, progress reports) with all members.</li>
                    <li>Provide all necessary records and documents related to the existing scheme structure to the Implementing Agency and fully cooperate in the consultation process with members.</li>
                </List>

                <SectionTitle>11. Institutional Arrangement:</SectionTitle>
                <List ordered>
                    <li>The redevelopment scheme can be implemented through Government Agencies (Development Authority, UP Housing & Development Board, SADA, Regulated Area Authority), PPP, Private Developer, or Housing Society/AOA.</li>
                    <li>Awas Bandhu, Uttar Pradesh, will be the Nodal Agency at the state level for scheme monitoring and inter-departmental coordination.</li>
                    <li>To provide guidance on policy matters, an inter-departmental committee will be constituted at the state level under the chairmanship of the Principal Secretary, Housing and Urban Planning Department, U.P. Government.</li>
                    <li>To resolve practical difficulties at the local level, a committee will be constituted under the chairmanship of the Vice Chairman (Development Authority) / Housing Commissioner / Chairman (SADA / Regulated Area), with representatives from concerned departments as members.</li>
                </List>

                <Paragraph>3- In this regard, I am directed to request you to kindly ensure strict compliance with the provisions of the Uttar Pradesh Urban Redevelopment Policy, 2026, with immediate effect.</Paragraph>

                <div className="mt-12 text-right">
                    <p className="font-bold">Yours faithfully,</p>
                    <div className="mt-4 inline-block text-left">
                        <p className="text-sm italic text-slate-500 border border-slate-300 px-2 py-1 bg-slate-50 rounded">Digitally signed by<br />GURU PRASAD PORALA<br />10:37:51 (2026)</p>
                        <p className="font-bold mt-2">Principal Secretary.</p>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-300 text-sm">
                    <p className="font-bold mb-4">Copy forwarded to the following for information and necessary action-</p>
                    <List ordered>
                        <li>Additional Chief Secretary to Hon&apos;ble Chief Minister, Government of Uttar Pradesh.</li>
                        <li>Principal Staff Officer to Chief Secretary, Government of Uttar Pradesh.</li>
                        <li>Infrastructure and Industrial Development Commissioner, Uttar Pradesh.</li>
                        <li>All Additional Chief Secretaries / Principal Secretaries / Secretaries, Government of Uttar Pradesh.</li>
                        <li>Commissioner and Secretary, Board of Revenue, Uttar Pradesh.</li>
                        <li>Inspector General, Registration, Uttar Pradesh.</li>
                        <li>Divisional Commissioners, All Divisions, Uttar Pradesh.</li>
                        <li>District Magistrates, All Uttar Pradesh.</li>
                        <li>Chairmen, All Special Area Development Authorities, Uttar Pradesh.</li>
                        <li>District Magistrates / Controlling Authorities, All Regulated Areas, Uttar Pradesh.</li>
                        <li>Secretary, U.P. Real Estate Regulatory Authority (RERA), Lucknow.</li>
                        <li>Registrar, U.P. Real Estate Appellate Tribunal, Lucknow.</li>
                        <li>Chief Executive Officers, All Industrial Development Authorities, Uttar Pradesh.</li>
                        <li>Chief Town and Country Planner, Town and Country Planning Department, U.P. Lucknow.</li>
                        <li>Director, Awas Bandhu, U.P., Lucknow with the instruction to immediately upload a copy of the Government Order on the website of the Housing and Urban Planning Department.</li>
                        <li>All Sections, Housing and Urban Planning Department, Government of U.P.</li>
                        <li>Guard File.</li>
                    </List>

                    <div className="mt-8 text-right">
                        <p className="font-bold">By Order,</p>
                        <p className="font-bold mt-4">P. Guruprasad</p>
                        <p>Principal Secretary.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

// --- FULL HINDI POLICY ---
function FullPolicyHindiTab() {
    return (
        <div className="max-w-4xl mx-auto animate-fadeIn">
            {/* Action Bar */}
            <div className="flex justify-end mb-4 space-x-4">
                <button onClick={() => window.print()} className="flex items-center text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
                    <Printer className="w-4 h-4 mr-2" /> प्रिंट
                </button>
            </div>

            {/* Document Container */}
            <div className="bg-white shadow-2xl border border-slate-300 p-8 md:p-16 relative">
                {/* Meta Info Header */}
                <div className="text-sm font-semibold text-slate-600 mb-8 flex flex-col md:flex-row justify-between">
                    <div>
                        <p>8-3099/313/2024-आवास एवं शहरी नियोजन अनुभाग-3</p>
                        <p>1/1231214/2026</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-left md:text-right">
                        <p>लखनऊ: दिनांक 10 फरवरी, 2026</p>
                    </div>
                </div>

                <div className="mb-8">
                    <p className="font-bold">प्रेषक,</p>
                    <p className="ml-4">पी० गुरूप्रसाद<br />प्रमुख सचिव,<br />उत्तर प्रदेश शासन।</p>
                    <p className="font-bold mt-4">सेवा में,</p>
                    <ol className="list-decimal ml-8">
                        <li>आवास आयुक्त,<br />उ०प्र० आवास एवं विकास परिषद, लखनऊ।</li>
                        <li className="mt-2">उपाध्यक्ष,<br />समस्त विकास प्राधिकरण, उत्तर प्रदेश।</li>
                    </ol>
                </div>

                <div className="bg-slate-100 p-4 border-l-4 border-slate-800 mb-8 font-bold text-lg text-slate-800">
                    विषयः - उत्तर प्रदेश शहरी पुनर्विकास नीति, 2026 लागू किये जाने के संबंध में।
                </div>

                <Paragraph>महोदय,</Paragraph>
                <Paragraph>
                    कृपया प्रदेश में नगरीकरण का प्रसार तेजी से हो रहा है। रोजगार एवं अन्य कारणों से ग्रामीण जनसंख्या का शहरी क्षेत्रों की ओर आकर्षण होने से शहरी क्षेत्र में निरन्तर फैलाव हो रहा है। शहरी क्षेत्र के विस्तार के साथ-साथ शहरों के पूर्व विकसित क्षेत्रों विशेषकर भवनों / निर्माण संरचनाओं का समय के साथ पुराना व जीर्ण होना एक नैसर्गिक प्रक्रिया है, जिसके कारण ऐसे क्षेत्र शहरी क्षय (Urban decay) का शिकार हो रहे हैं, जो दुविधा की स्थिति उत्पन्न करते हैं अर्थात् भूमि की ऊंची कीमतें और वृहद् विकास &apos;पोटेन्शियल&apos; होने के बावजूद ऐसी सम्पत्तियां &apos;अंडरयूटिलाईज्ड&apos; पड़ी हैं, जोकि अन्यथा शहरों के आर्थिक विकास में महत्वपूर्ण योगदान दे सकती हैं। पुरानी एवं जीर्ण-शीर्ण योजनाओं में बढ़ते खतरनाक एवं अस्वास्थ्यकारी पर्यावरण के कारण वहां के निवासियों और व्यवसायियों के जीवन की गुणवत्ता पर प्रतिकूल प्रभाव पड़ता है तथा ऐसे क्षेत्रों में दुर्घटनाओं की सम्भावना बढ़ जाती है। ऐसी स्थिति में जब भवनों की मरम्मत करना विकल्प न हो, तब पुनर्विकास ही एकमात्र समाधान शेष रह जाता है।
                </Paragraph>
                <Paragraph>
                    शहरीकरण में हो रही वृद्धि को समायोजित करने हेतु आवास की आपूर्ति में वृद्धि तथा अवस्थापना सुविधाओं का सुदृढ़ीकरण / सम्वर्द्धन किये जाने, रिहायशी एवं कार्य करने की दशाओं में सुधार करने, अफोर्डेबल हाउसिंग के विकास को बढ़ावा देने, नगरीय भूमि के इष्टतम उपयोग से नगरीय प्रसार को नियन्त्रित करने, भवनों की ऊर्जा सक्षम डिजाइनों एवं सस्टनेबल बिल्डिंग प्रैक्टिसेज को अपनाने के अवसरों को बढ़ावा देने के लिए पुनर्विकास की आवश्यकता है। इससे विनिर्माण, रियल इस्टेट एवं अन्य सम्बंद्ध क्षेत्रकों में रोजगार सृजन के साथ-साथ निवेश आकर्षित होने से राज्य के आर्थिक विकास को भी प्रोत्साहन मिलेगा।
                </Paragraph>
                <Paragraph>
                    2- उपर्युक्त वर्णित स्थिति को दृष्टिगत रखते हुए शासन द्वारा सम्यक विचारोपरान्त नागरिकों के समग्र कल्याण में वृद्धि और सुस्थिर शहरी विकास हेतु भौतिक एवं सामाजिक अवस्थापनाओं का सुदृढ़ीकरण / समवर्धन तथा पुराने एवं जीर्ण-शीर्ण व असुरक्षित भवनों को पुनर्निर्मित कर एक जीवन्त, समावेशी और सुस्थिर समुदाय में रूपान्तरित करने के उद्देश्य से <strong>उत्तर प्रदेश शहरी पुनर्विकास नीति, 2026</strong> निम्नवत् निर्धारित की जाती है :-
                </Paragraph>

                <SectionTitle>1. पुनर्विकास योजना हेतु पात्रताः</SectionTitle>
                <List>
                    <li><strong>1.1</strong> सार्वजनिक एवं निजी क्षेत्र की समस्त प्रकार की योजनाएं, जो न्यूनतम 25 वर्ष पुरानी हों अथवा &apos;स्ट्रक्चरल ऑडिट&apos; की रिपोर्ट के आधार पर पुनर्विकास हेतु शासकीय अभिकरण द्वारा अनुमति प्रदान की गयी हो।<br />
                        <span className="block mt-2 text-sm bg-blue-50 p-2 border-l-2 border-blue-400"><em>स्पष्टीकरणः शासकीय अभिकरण का तात्पर्य उस अभिकरण से है, जिसके अधिकार क्षेत्र में पुनर्विकास योजना स्थित है।</em></span>
                    </li>
                    <li><strong>1.2</strong> हाउसिंग सोसायटी अथवा अपार्टमेन्ट ऑनर्स एसोसिएशन की योजना, जो न्यूनतम 25 वर्ष पुरानी हो और जहां पंजीकृत हाउसिंग सोसायटी अथवा अपार्टमेन्ट ऑनर्स एसोसिएशन अथवा अन्य &apos;लीगल इन्टिटी&apos; का गठन हो चुका हो।</li>
                    <li><strong>1.3</strong> पुनर्विकास योजना हेतु भूमि का न्यूनतम क्षेत्रफल 1500 वर्ग मीटर होगा।</li>
                    <li><strong>1.4</strong> एकल आवास/भवन इस नीति के अधीन पुनर्विकास हेतु पात्र नहीं होंगे।</li>
                    <li><strong>1.5</strong> लीज़ पर आवंटित भूमि यथा-नजूल भूमि, इम्प्रूवमेंट ट्रस्ट की भूमि तथा अन्य शासकीय भूमि, जिसका फी-होल्ड में परिवर्तन नहीं हुआ है, पुनर्विकास हेतु पात्र नहीं होगी।</li>
                    <li><strong>1.6</strong> ऐसी औद्योगिक इकाईयां, जो विगत 03 वर्षों से बन्द पड़ी हों अथवा जिन्हें नेशनल कम्पनी लॉ ट्रिब्युनल (एन.सी.एल.टी.) अथवा सक्षम प्राधिकारी द्वारा रूग्ण इकाई घोषित किया गया हो, से आच्छादित भूमि जो निर्विवाद एवं सर्वभार मुक्त हो तथा जिसके पुनर्विकास हेतु औद्योगिक विकास विभाग अथवा सम्बन्धित विभाग द्वारा अनुमति प्रदान की गयी हो।</li>
                    <li><strong>1.7</strong> ऐसी औद्योगिक इकाईयां, जो प्रदूषण अथवा पर्यावरणीय कारणों से &apos;नॉन-कन्फार्मिंग&apos; हों अथवा विस्तार हेतु भूमि की अधिक आवश्यकता होने अथवा शहर के अन्दर कार्यशील रखने में व्यवहारिक कठिनाईया होने के कारण अन्यत्र / वाह्य क्षेत्रों में पुनस्थापन की इच्छुक हों, से आच्छादित भूमि, जिसके पुनर्विकास हेतु औद्योगिक विकास विभाग अथवा सम्बन्धित विभाग द्वारा अनुमति प्रदान की गयी हो।</li>
                    <li><strong>1.8</strong> शहरों के आन्तरिक भागों में स्थित विभिन्न शासकीय विभागों / निगमों की रिक्त अथवा &apos;अन्डरयूटिलाईज्ड&apos; अथवा अप्रयुक्त भूमि।</li>
                    <li><strong>1.9</strong> ऐसे क्षेत्र, जिनकी संरचनात्मक दशा निम्न स्तरीय हो, भूमि का &apos;सब-आप्टिमल&apos; उपयोग हो अथवा भीड़युक्त हो अथवा समुचित अवस्थापना सुविधाओं एवं सेवाओं से वंचित हों।</li>
                    <li><strong>1.10</strong> अन्य &apos;नॉन-कन्फार्मिंग&apos; उपयोग यथा-कारागार, बस टर्मिनल/डिपो (बस स्टाप को छोड़कर) तथा इसी प्रकृति के अन्य उपयोग, जो कि शहरों के घने बसे/भीड़ वाले क्षेत्रों में स्थित हों।</li>
                    <li><strong>1.11</strong> यह नीति महायोजनान्तर्गत परिभाषित हेरिटेज़ भवनों / जोन्स अथवा अन्य सक्षम प्राधिकारी यथा-नेशनल मान्यूमेन्ट अथॉरिटी, भारतीय पुरातत्व सर्वेक्षण विभाग या किसी अन्य अभिकरण द्वारा घोषित इस प्रकृति के क्षेत्रों/भवनों के लिए लागू नहीं होगी।</li>
                    <li><strong>1.12</strong> &apos;पुनर्विकास&apos; का तात्पर्य सामान्यतः ऐसे क्षेत्रों/भवनों, जो कभी पूर्व में विकसित / निर्मित किए गए थे, परन्तु समय के साथ जीर्ण-शीर्ण संरचनात्मक अवस्था अथवा भूमि का &apos;सब आप्टिमल&apos; उपयोग अथवा पर्यावरणीय ह्रास के कारण वर्तमान में अप्रयुक्त अथवा अप्रोज्य हो गए हैं अथवा &apos;अन्डरयूटिलाईज्ड&apos; पड़े हैं, की भौतिक, आर्थिक, सामाजिक एवं पर्यावरणीय दशाओं में सुधार लाए जाने से है।</li>
                </List>

                <SectionTitle>2. पुनर्विकास योजनाओं के मॉडल्सः</SectionTitle>
                <Paragraph>पुनर्विकास योजनाओं का कियान्वयन निम्न मॉडल्स के आधार पर किया जा सकेगाः-</Paragraph>
                <List ordered>
                    <li>शासकीय अभिकरण द्वारा पुनर्विकास योजना का स्वयं कियान्वयन।</li>
                    <li>शासकीय अभिकरण द्वारा सार्वजनिक-निजी-सहभागिता (पीपीपी) अथवा निजी विकासकर्ता के माध्यम से पुनर्विकास योजना का कियान्वयन।</li>
                    <li>निजी क्षेत्र में हाउसिंग सोसायटी/अपार्टमेन्ट ऑनर्स एसोसिएशन द्वारा पुनर्विकास योजना का कियान्वयन।</li>
                </List>

                <SubSectionTitle>2.1 शासकीय अभिकरण द्वारा पुनर्विकास योजना के क्रियान्वयन हेतु प्रक्रियाः-</SubSectionTitle>
                <List ordered>
                    <li>हाउसिंग सोसायटी /अपार्टमेन्ट ऑनर्स एसोसिएशन द्वारा सम्बन्धित शासकीय अभिकरण को पुनर्विकास हेतु आवेदन प्रस्तुत किया जाएगा अथवा शासकीय अभिकरण द्वारा किसी पात्र योजना के लिए स्वयं पुनर्विकास का प्रस्ताव किया जा सकता है।</li>
                    <li>पुनर्विकास योजना के लिए हाउसिंग सोसायटी / अपार्टमेन्ट ऑनर्स एसोसिएशन के न्यूनतम दो-तिहाई सदस्यों की सहमति प्राप्त करना आवश्यक होगा। जहां हाउसिंग सोसायटी / अपार्टमेन्ट ऑनर्स एसोसिएशन का गठन नहीं हुआ है, वहां यथास्थिति सोसायटी रजिस्ट्रेशन एक्ट 1860/उ.प्र. अपार्टमेन्ट (निर्माण, स्वामित्व और अनुरक्षण का संवर्धन) अधिनियम, 2010 की व्यवस्थानुसार अपार्टमेन्ट ऑनर्स एसोसिएशन बनाना अनिवार्य होगा।</li>
                    <li>शासकीय विभागों / निगमों के स्वामित्व की भूमि के चिन्हीकरण हेतु यथास्थिति विकास प्राधिकरण, आवास एवं विकास परिषद, विशेष क्षेत्र विकास प्राधिकरण तथा नियंत्रक प्राधिकारी, विनियमित क्षेत्र नोडल एजेन्सी होगी। ऐसी भूमि के लिए शासकीय विभाग / निगम द्वारा स्वयं अथवा सम्बन्धित शासकीय अभिकरण के माध्यम से पुनर्विकास योजना बनायी जा सकती है। योजना बनाने में अन्तर्विभागीय समन्वय आवश्यक होने पर जिलाधिकारी / मण्डलायुक्त के माध्यम से प्रस्ताव संबन्धित शासकीय विभाग के अनुमोदनार्थ प्रस्तुत किया जाएगा।</li>
                    <li>लीज पर आवंटित सम्पत्तियां, जिनकी लीज़ अवधि समाप्त हो गयी है, ऐसे प्रकरणों में हाउसिंग सोसायटी /अपार्टमेन्ट ऑनर्स एसोसिएशन की सहमति की आवश्यकता नहीं होगी, बल्कि शासकीय अभिकरण द्वारा &apos;री-इन्ट्री&apos; की कार्यवाही कर पुनर्विकास योजना बनाई जा सकेगी, जिसके अन्तर्गत विद्यमान अध्यासियों को पुनर्विकसित सम्पत्तियों के आवंटन में वरीयता दी जाएगी।</li>
                    <li>शासकीय अभिकरण द्वारा पुनर्विकास योजना की प्रारम्भिक प्रोजेक्ट रिपोर्ट तैयार की जाएगी, जिसमें निम्न विवरण शामिल होंगेः-
                        <ul className="list-[lower-roman] pl-6 mt-2 space-y-1 text-sm">
                            <li>हाउसिंग सोसायटी / अपार्टमेन्ट ऑनर्स एसोसिएशन के न्यूनतम दो-तिहाई सदस्यों की सहमति से पारित प्रस्ताव की प्रति।</li>
                            <li>योजना/भवनों की पात्रता के सम्बन्ध में शासकीय अभिकरण का प्रमाण-पत्र।</li>
                            <li>स्थल की स्थिति, पहुंच मार्ग, वर्तमान भू-उपयोग, भूमि का वर्तमान सर्किल रेट, कुल निर्मित तल क्षेत्रफल, भवन की ऊंचाई, तलों की संख्या, उपलब्ध पार्किंग तथा अन्य कोई सूचना, जो आवश्यक हो।</li>
                            <li>लाभार्थियों की सूची एवं प्रत्येक के स्वामित्व में वर्तमान &apos;कारपेट एरिया&apos; अथवा &apos;बिल्ट-अप एरिया (वर्ग मीटर में)।</li>
                            <li>पुनर्विकास योजना की लागत का ऑगणन।</li>
                            <li>योजना को वित्तीय रूप से वॉयबल बनाने हेतु &apos;फी-सेल&apos; के रूप में प्रस्तावित &apos;बिल्ट-अप एरिया&apos; अथवा भूमि का क्षेत्रफल (वर्ग मीटर में)।</li>
                            <li>योजना के सम्बन्ध में विभिन्न विभागों / अभिकरणों से वांछित अनापत्तियों की सूची।</li>
                            <li>अन्य कोई सूचना, जो आवश्यक हो।</li>
                        </ul>
                    </li>
                    <li>योजना के कियान्वयन हेतु शासकीय अभिकरण द्वारा कार्यान्वयन एजेन्सी यथा-विकासकर्ता, कान्ट्रेक्टर, आदि की नियमानुसार नियुक्ति की जा सकेगी।</li>
                    <li>शासकीय अभिकरण, हाउसिंग सोसायटी/अपार्टमेन्ट ऑनर्स एसोसिएशन तथा कार्यान्वयन एजेन्सी के मध्य पुनर्विकास अनुबन्ध निष्पादित किया जाएगा, जिसका प्रपत्र शासन द्वारा अलग से जारी किया जाएगा।</li>
                    <li>शासकीय अभिकरण द्वारा योजना की डी.पी.आर. तैयार की जाएगी, जिसके अन्तर्गत क्रियान्वयन की रणनीति, विद्यमान एवं प्रस्तावित इकाईयों का &apos;कारपेट एरिया&apos; अथवा &apos;बिल्ट-अप एरिया&apos;, विद्यमान अध्यासियों के लिए वैकल्पिक निवास व्यवस्था अथवा किराये का भुगतान, भौतिक एवं सामाजिक अवस्थापनाओं का सम्वर्द्धन / सृदृढ़ीकरण, भवनों की विशिष्टियां, &apos;कॉमन एरियाज़&apos; की डिटेल, परियोजना लागत, वित-पोषण व्यवस्था, &apos;परफार्मेन्स गारन्टी&apos;, &apos;इम्पलीमेंटेशन शेड्यूल&apos; तथा &apos;ऑपरेशन एण्ड मेन्टेनेन्स&apos; के प्राविधान शामिल होंगे।</li>
                    <li>शासकीय अभिकरण द्वारा डी.पी.आर. के प्राविधानों तथा ट्रांजिट एकोडोमेशन / किराये के सम्बन्ध में लाभार्थियों को जानकारी उपलब्ध करायी जायेगी।</li>
                    <li>समस्त लाभार्थी ट्रांजिट एकोमोडेशन अथवा सहमत हुए किराये (जहां पुर्नस्थापन आवश्यक हो) के लिए पात्र होंगे।</li>
                    <li>लाभार्थियों के पुर्नस्थापन के उपरान्त शासकीय अभिकरण द्वारा पुनर्विकास योजना के कियान्वयन की कार्यवाही प्रारम्भ की जायेगी और उसे 03 वर्ष की अवधि में पूर्ण किया जायेगा। उक्त अवधि में बोर्ड के अनुमोदन से अधिकतम 02 वर्ष का विस्तार अनुमन्य होगा।</li>
                    <li>योजना यदि वित्तीय रूप से वायबल न हो, तो लाभार्थियों से वित्तीय योगदान देने हेतु सहमति प्राप्त की जानी होगी। परन्तु, फिर भी योजना यदि वायबल न हो, तो शासकीय अभिकरण द्वारा पुनर्विकास योजना का परित्याग किया जा सकता है।</li>
                </List>

                <SubSectionTitle>2.2 शासकीय अभिकरण द्वारा सार्वजनिक-निजी-सहभागिता (पीपीपी) अथवा विकासकर्ता के माध्यम से पुनर्विकास योजना के क्रियान्वयन हेतु प्रक्रियाः-</SubSectionTitle>
                <List ordered>
                    <li>योजना के चिन्हीकरण एवं लाभार्थियों से सहमति प्राप्त करने हेतु प्रकियां प्रस्तर 2.1 के उप प्रस्तर (1) एवं (2) के अनुसार होगी।</li>
                    <li>पुनर्विकास हेतु चिन्हित योजना के सम्बन्ध में बोर्ड का अनुमोदन प्राप्त करने के उपरान्त शासकीय अभिकरण द्वारा नियमानुसार &apos;प्राइवेट सेक्टर इन्टिटी&apos; अथवा विकासकर्ता चयन किया जाएगा।</li>
                    <li>पुनर्विकास योजना के कियान्वयन हेतु शासकीय अभिकरण, विकासकर्ता तथा हाउसिंग सोसाइटी/अपार्टमेन्ट ऑनर्स एसोसिएशन के मध्य त्रिपक्षीय अनुबन्ध निष्पादित किया जाएगा, जिसका प्रपत्र अलग से जारी किया जाएगा।</li>
                    <li>&apos;प्राइवेट सेक्टर इन्टिटी / विकासकर्ता द्वारा प्रस्तर 2.1 के उप प्रस्तर (5) में दिये गये विवरण के अनुसार प्रारम्भिक प्रोजेक्ट रिपोर्ट तथा प्रस्तर 2.1 के उप प्रस्तर (8) के अनुसार डी.पी.आर. तैयार की जायेगी, जिस पर शासकीय अभिकरण के बोर्ड का अनुमोदन प्राप्त किया जाएगा।</li>
                    <li>योजना की डी.पी.आर. के सम्बन्ध में लाभार्थियों को अवगत कराते हुए प्रोजेक्ट कम्पोनेन्ट्स एवं ट्रांजिट एकोमोडेशन अथवा किराये को अन्तिम रूप दिया जायेगा।</li>
                    <li>पुनर्विकास एवं &apos;फ्री-सेल&apos; अंश के संबंध में समस्त विधिक अनुमोदन प्राप्त करने हेतु विकासकर्ता स्वयं उत्तरदायी होगा।</li>
                    <li>लाभार्थियों के पुनस्थापन के तत्काल उपरान्त विकासकर्ता द्वारा योजना के क्रियान्वयन की कार्यवाही प्रारम्भ की जाएगी और उसे 03 वर्ष में पूर्ण किया जाएगा। उक्त अवधि में शासकीय अभिकरण द्वारा अधिकतम 02 वर्ष की वृद्धि अनुमन्य की जा सकेगी।</li>
                    <li>अनुबन्ध, की शर्तों के अनुसार पुनर्विकास योजना के विकास/निर्माण कार्य पूर्ण हो जाने पर उसके अनुपात में विकासकर्ता को उसके &apos;फी-सेल अंश के विक्रय/हस्तांतरण का अधिकार होगा।</li>
                </List>

                <SubSectionTitle>2.3 निजी क्षेत्र में हाउसिंग सोसायटी / अपार्टमेन्ट ऑनर्स एसोसिएशन द्वारा पुनर्विकास योजना के क्रियान्वयन हेतु प्रक्रियाः-</SubSectionTitle>
                <List ordered>
                    <li>पुनर्विकास योजना के क्रियान्वयन हेतु हाउसिंग सोसायटी /अपार्टमेन्ट ऑनर्स एसोसिएशन द्वारा न्यूनतम दो-तिहाई सदस्यों/ आवंटियों की सहमति से प्रस्ताव पारित किया जाएगा।</li>
                    <li>हाउसिंग सोसायटी /अपार्टमेन्ट ऑनर्स एसोसिएशन द्वारा पुनर्विकास योजना की डिटेल्ड प्रोजेक्ट रिपोर्ट (डी.पी.आर.) तैयार करने हेतु प्रोजेक्ट मैनेजमेन्ट कन्सलटेन्ट नियुक्त किया जा सकता है।</li>
                    <li>प्रोजेक्ट मैनेजमेन्ट कन्सलटेन्ट द्वारा पुनर्विकास योजना की डी.पी.आर. तैयार की जाएगी, जिसके अन्तर्गत सदस्यों को आवंटित किये जाने वाले &apos;कारपेट एरिया&apos; अथवा &apos;बिल्ट-अप एरिया&apos;, वैकल्पिक निवास व्यवस्था अथवा किराये का भुगतान, पार्क एवं खुले क्षेत्र, पार्किंग, भवनों की विशिष्टियां, &apos;कॉमन एरियाज&apos;, भौतिक एवं सामाजिक अवस्थापना सुविधाएं एवं सेवाएं, &apos;कॉरपस फण्ड&apos; एवं बैंक गारन्टी, योजना को पूर्ण करने हेतु समयावधि, प्रचलित नियमों के अधीन विधिक अनापत्तियों की सूची तथा कोई अन्य विषय, जो पुनर्विकास योजना के लिए आवश्यक हो, शामिल होंगे। डिटेल्ड प्रोजेक्ट रिपोर्ट को शासकीय अभिकरण को सूचनार्थ प्रेषित किया जाएगा।</li>
                    <li>प्रोजेक्ट मैनेजमेन्ट कन्सलटेन्ट द्वारा कार्यान्वयन एजेन्सी यथा-कान्ट्रेक्टर, बिल्डर, कम्पनी अथवा विकासकर्ता से ऑफर आमंत्रित किए जाएंगे और हाउसिंग सोसायटी /अपार्टमेन्ट ऑनर्स एसोसिएशन की प्रबन्ध समिति की सहमति से उपयुक्त विकासकर्ता का चयन किया जाएगा। प्रोजेक्ट मैनेजमेन्ट कन्सलटेन्ट, हाउसिंग सोसायटी / अपार्टमेन्ट ऑनर्स एसोसिएशन तथा कार्यान्यन एजेन्सी के मध्य पुनर्विकास अनुबन्ध निष्पादित किया जाएगा, जिसके अन्तर्गत निम्न शर्तें / विवरण शामिल किए जाएंगेः-
                        <ul className="list-[lower-roman] pl-6 mt-2 space-y-1 text-sm">
                            <li>पुनर्विकास योजना को पूर्ण करने हेतु समयावधि।</li>
                            <li>बैंक गारन्टी, जिसकी धनराशि सभी पक्षों द्वारा परस्पर सहमति से तय की जाएगी।</li>
                            <li>पुनर्विकसित इकाईयों का आवंटन होने तक विस्थापित लाभार्थियों को निःशुल्क वैकल्पिक आवास की व्यवस्था अथवा किराये का भुगतान।</li>
                            <li>विद्यमान इकाईयों के अतिरिक्त निर्मित नई इकाईयों का नए सदस्यों को आवंटन किये जाने हेतु शर्तों का निर्धारण तथा उनके आवंटन / निस्तारण का अधिकार विकासकर्ता को दिया जाना।</li>
                            <li>प्रत्येक सदस्य को आवंटित किये जाने वाला &apos;कारपेट एरिया&apos; अथवा &apos;बिल्ट-अप एरिया, जो हाउसिंग सोसायटी /अपार्टमेन्ट ऑनर्स एसोसिएशन, कार्यान्वयन एजेन्सी तथा एसोसिएशन के सदस्यों द्वारा आपसी सहमति के आधार पर तय किया जाएगा।</li>
                            <li>पुनर्विकास अनुबन्ध की शर्तों में डिफाल्ट होने की दशा में दण्डात्मक कार्यवाही का प्राविधान अथवा अनुबन्ध को समाप्त करने की प्रकिया।</li>
                            <li>अन्य शर्तें / विवरण, जो आवश्यक हों।</li>
                        </ul>
                    </li>
                    <li>पुनर्विकास योजना की डी.पी.आर. पर शासकीय अभिकरण को सूचनार्थ प्रेषित किये जाने की तिथि से हाउसिंग सोसाइटी / अपार्टमेन्ट ऑनर्स एसोसिएशन द्वारा अधिकतम 60 दिन की अवधि में योजना स्थल को रिक्त करवाकर कार्यान्वयन एजेंन्सी को उपलब्ध कराया जाएगा।</li>
                    <li>विकासकर्ता द्वारा पुनर्विकसित इकाईयां अनुबन्ध की शर्तों के अनुसार लाभार्थियों को हस्तांतरित कराये जाने के लिए हाउसिंग सोसायटी /अपार्टमेन्ट ऑनर्स एसोसिएशन उत्तरदायी होगा। लाभार्थियों के हितों की सुरक्षा हेतु हाउसिंग सोसायटी/अपार्टमेन्ट ऑनर्स एसोसिएशन उत्तरदायी होगा और यह भी अनुश्रवण करेगा कि योजना का कियान्वयन पुनर्विकास अनुबन्ध की शर्तों के अनुसार सुनिश्चित हो।</li>
                    <li>हाउसिंग सोसायटी / अपार्टमेन्ट ऑनर्स एसोसिएशन द्वारा आवश्यक होने पर पुनर्विकास योजना का वित्त पोषण बैंक / वित्तीय संस्थाओं से कराया जा सकता है।</li>
                    <li>अन्य समस्त कार्यवाही पुनर्विकास अनुबन्ध की शर्तों के अनुसार सुनिश्चित की जायेगी।</li>
                    <li>उपर्युक्त प्रस्तर-1.6 एवं 1.7 में उल्लिखित औद्योगिक इकाईयों से आच्छादित भूमि के पुर्नविकास का क्रियान्वयन संबंधित विभाग / अभिकरण द्वारा यथारथिति उपर्युक्त प्रस्तर-2.1, 2.2 एवं 2.3 में से चयनित विकल्प के निर्धारित प्रक्रिया के अनुसार किया जायेगा।</li>
                    <li>यदि इकाई को शासन या किसी शासकीय संस्था द्वारा भूमि का सशर्त आवंटन किया गया हो तो ऐसी भूमि की पुनर्विकास योजना के अनुमोदन के पूर्व संबंधित विभाग की विधिवत अनुमति/अनापत्ति प्राप्त कर ली जाएगी।</li>
                </List>

                <SectionTitle>3. नियोजन मानक (प्लानिंग नार्क्स):</SectionTitle>
                <List ordered>
                    <li>पुनर्विकास योजना का नियोजन प्रचलित भवन निर्माण एवं विकास उपविधि में निर्धारित मानकों के अनुसार किया जाएगा। विद्यमान अवस्थापना सुविधाओं एवं भवनों की अवस्था को देखते हुए &apos;केस-टू-केस&apos; आधार पर उक्त मानकों में शासकीय अभिकरण के बोर्ड के अनुमोदन से शिथिलता प्रदान की जा सकेगी।</li>
                    <li>एक से अधिक ऐसे भूखण्ड अथवा योजनाएं, जो निरन्तरता में स्थित हों, को पुनर्विकास योजना के प्रयोजनार्थ आमेलित किया जा सकता है, जिस हेतु आमेलन शुल्क देय नहीं होगा।</li>
                    <li>पुनर्विकास योजनान्तर्गत विद्यमान आन्तरिक सड़कें, पार्क एवं खुले क्षेत्र तथा अन्य जन-सुविधाओं को पुनर्नियोजित किया जा सकेगा, परन्तु आन्तरिक सड़कों का प्रमुख सार्वजनिक मार्गों / महायोजना मार्गों से समुचित लिंकेज सुनिश्चित करना होगा।</li>
                    <li>योजना के नियोजन सम्बन्धी अन्य मानक प्रचलित भवन निर्माण एवं विकास उपविधि के अनुसार होंगे।</li>
                </List>

                <SectionTitle>4. समय सारणी (टाईमलाइन्स)ः</SectionTitle>
                <List ordered>
                    <li>पुनर्विकास योजना की डी.पी.आर. पर शासकीय अभिकरण का अनुमोदन प्राप्त हो जाने की तिथि से हाउसिंग सोसाइटी /अपार्टमेन्ट ऑनर्स एसोसिएशन द्वारा अधिकतम 60 दिन की अवधि में योजना स्थल को रिक्त करवाकर कार्यान्वयन एजेंन्सी को उपलब्ध कराया जाएगा।</li>
                    <li>हाउसिंग सोसायटी / अपार्टमेन्ट ऑनर्स एसोसिएशन की सहमति प्राप्त होने के दिनांक से कार्यान्वयन एजेन्सी द्वारा 12 माह के अन्दर योजना का क्रियान्वयन प्रारम्भ करना होगा। विशेष परिस्थितियों में उक्त टाईमलाईन में शासकीय अभिकरण के बोर्ड द्वारा वृद्धि प्रदान की जा सकेगी।</li>
                    <li>लाभार्थियों के पुनर्रथापन के तत्काल उपरान्त कार्यान्वयन एजेन्सी द्वारा योजना के क्रियान्वयन की कार्यवाही प्रारम्भ की जाएगी और उसे 03 वर्ष में पूर्ण किया जाएगा। उक्त अवधि में शासकीय अभिकरण द्वारा अधिकतम 02 वर्ष की वृद्धि अनुमन्य की जा सकेगी।</li>
                    <li>कार्यान्वयन एजेन्सी द्वारा लाभार्थियों के पुनस्थापन की तिथि से 03 वर्ष अथवा विस्तारित अवधि के अन्दर उनको पुनर्विकसित इकाईयां हस्तांतरित की जायेंगी।</li>
                </List>

                <SectionTitle>5. ट्रांजिट एकमोडेशनः</SectionTitle>
                <List ordered>
                    <li>योजना पर अनुमोदन प्राप्त होने की तिथि से लेकर पुनर्विकसित इकाईयों को हस्तांतरित किये जाने की तिथि तक लाभार्थियों के लिए कार्यान्वयन एजेन्सी द्वारा निःशुल्क &apos;ट्रांजिट एकोमोडेशन&apos; की व्यवस्था की जाएगी।</li>
                    <li>विकल्पस्वरूप, लाभार्थियों को सम्बन्धित योजना में प्रचलित किराये की दर के समतुल्य किराया भी दिया जा सकता है अथवा किराये की दर हाउसिंग सोसायटी / अपार्टमेन्ट ऑनर्स एसोसिएशन एवं कार्यान्वयन एजेन्सी द्वारा परस्पर तय की जा सकती है।</li>
                    <li>&apos;ट्रांजिट एकोमोडेशन&apos; की लागत अथवा किराया कार्यान्वयन एजेन्सी द्वारा वहन किया जायेगा।</li>
                    <li>लाभार्थियों का पुनस्थापन चरणबद्ध रूप में किया जा सकेगा।</li>
                    <li>पुनर्विकसित इकाईयों को हस्तांतरित किये जाने में यदि विलम्ब होता है, तो इस हेतु उत्तरदायी पक्ष पर अनुबन्ध की शर्तों के अनुसार दण्ड अधिरोपित किया जायेगा।</li>
                </List>

                <SectionTitle>6. विधिक अनुमोदन एवं शुल्कों की देयताः</SectionTitle>
                <List ordered>
                    <li>पुनर्विकास योजना के सम्बन्ध में समस्त विधिक अनुमोदन प्राप्त करने के लिए कार्यान्वयन एजेन्सी उत्तरदायी होगी।</li>
                    <li>पुर्नविकास योजना के अनुमोदन के समय विकासकर्ता / कार्यान्वयन एजेन्सी द्वारा शासकीय अभिकरण को नियमानुसार देय शुल्कों का भुगतान करना होगा, जिनमें इस नीति के अन्तर्गत निर्धारित सीमा तक छूट अनुमन्य होगी।</li>
                    <li>अपार्टमेन्ट्स की पुनर्विकास योजना की संरचना, क्रियान्वयन एवं रख-रखाव में उ.प्र. अपार्टमेन्ट (निर्माण, स्वामित्व और अनुरक्षण का संवर्धन) अधिनियम, 2010 के सुसंगत प्राविधानों का अनुपालन सुनिश्चित किया जाएगा।</li>
                    <li>पुर्नविकास योजना को प्रचलित नियमों के अन्तर्गत उ.प्र. रेरा में पंजीकृत कराना अनिवार्य होगा।</li>
                    <li>विभिन्न शासकीय विभाग / अभिकरण यथा-नगर विकास, राजस्व, स्टाम्प एवं रजिस्ट्रेशन, पर्यावरण, अग्निशमन, औद्योगिक विकास विभाग, लोक निर्माण विभाग, आदि इस नीति की व्यवस्थानुसार अनुमोदन/अनापत्तियां प्रदान करने के लिए अपने नियमों में आवश्यक प्राविधान करेंगे।</li>
                </List>

                <SectionTitle>7. पुनर्विकसित इकाईयों का आवंटन / हस्तांतरणः</SectionTitle>
                <List ordered>
                    <li>लीज़ होल्ड भूमि होने की दशा में यदि उसका फ्रीहोल्ड न कराया गया हो, तो ऐसी भूमि का पुनर्विकास-लीज़ की शर्तों के अनुरूप किया जाएगा, और विकसित सम्पत्तियों का हस्तांतरण लीज होल्ड आधार पर ही किया जाएगा।</li>
                    <li>पुनर्विकसित इकाईयां लाभार्थियों को सीधे हस्तांतरित की जाएंगी, जबकि &apos;कॉमन एरियाज़&apos; एवं सुविधाओं का अविभाजित अंश हाउसिंग सोसायटी / अपार्टमेन्ट ऑनर्स एसोसिएशन को हस्तांतरित किया जाएगा। कॉमन एरियाज़ का हस्तांतरण हाउसिंग सोसायटी /अपार्टमेन्ट ऑनर्स एसोसिएशन को किये जाने पर स्टाम्प ड्यूटी देय नहीं होगी।</li>
                    <li>पुनर्विकसित इकाइयों का &apos;कारपेट एरिया&apos; अथवा &apos;बिल्ट-अप एरिया&apos; हाउसिंग सोसायटी /अपार्टमेन्ट ऑनर्स एसोसिएशन, कार्यान्वयन एजेन्सी तथा लाभार्थियों द्वारा आपसी सहमति के आधार पर तय किया जाएगा तथा इकाईयों का आवंटन यथासम्भव उनके मूल स्थान (उदाहरणार्थ तल, दिशा, कार्नर, रोड/पार्क फेसिंग, आदि) पर ही किया जाएगा। जहां किसी कारण से उक्त शर्तों का अनुपालन सम्भव न हों, वहां हाउसिंग सोसायटी / अपार्टमेन्ट ऑनर्स एसोसिएशन एवं सदस्यों की परस्पर सहमति से अथवा लॉटरी द्वारा आवंटन किया जाएगा।</li>
                </List>

                <SectionTitle>8. संचालन और रख-रखावः</SectionTitle>
                <List ordered>
                    <li>पुनर्विकसित योजना के संचालन और रख-रखाव की प्रक्रिया एवं शर्ते पुनर्विकास अनुबन्ध के अन्तर्गत परिभाषित की जाएंगी तथा पूर्णता प्रमाण-पत्र प्राप्त होने की तिथि से योजना का हाउसिंग सोसायटी/अपार्टमेन्ट ऑनर्स एसोसिएशन को हस्तान्तरण होने तक उसका रख-रखाव कार्यान्वयन एजेन्सी द्वारा किया जाएगा।</li>
                    <li>पुर्नविकसित भवनों की संरचनात्मक स्थिरता के सम्बन्ध में आगामी 02 वर्षों तक कोई भी दोष / कमी होने पर उसे ठीक कराने का दायित्व कार्यान्वयन एजेन्सी का होगा।</li>
                </List>

                <SectionTitle>9. पुनर्विकास योजना की वायबिलिटी हेतु इन्सेन्टिव्सः</SectionTitle>
                <List ordered>
                    <li>विकास शुल्क की देयता में 50 प्रतिशत की छूट अनुमन्य होगी।</li>
                    <li>&apos;निम्न भू-उपयोग&apos; से &apos;उच्च भू-उपयोग&apos; में परिवर्तन हेतु 25 प्रतिशत की छूट होगी तथा भू-उपयोग परिवर्तन हेतु नियमानुसार कार्यवाही की जाएगी।</li>
                    <li>एक से अधिक भूखण्डों / सम्पत्तियों / योजनाओं के आमेलन की सुविधा होगी जिस हेतु आमेलन शुल्क देय नहीं होगा।</li>
                    <li>पुनर्विकसित इकाईयों का मूल आवंटियों / वैध अध्यासियों के पक्ष में सेल-डीड पंजीकरण हेतु स्टाम्प ड्यूटी देय नहीं होगी, परन्तु इकाई का क्षेत्रफल मूल इकाई से बढ़ने की दशा में बढ़े हुए भाग पर नियमानुसार स्टाम्प ड्यूटी देय होगी, जबकि नये आवंटियों (यदि हों) द्वारा नियमानुसार स्टाम्प ड्यूटी देय होगी।</li>
                    <li>पुनर्विकास योजनान्तर्गत 10-10 प्रतिशत ई.डब्ल्यू.एस. एवं एल.आई.जी. इकाईयों के निर्माण की अनिवार्यता अथवा शेल्टर फीस की देयता से छूट होगी।</li>
                    <li>भंवन उपविधि के अनुसार अनुमन्य बेसिक एफ.ए.आर. के अतिरिक्त 1.0 एफ.ए.आर. निःशुल्क अनुमन्य होगा, जिसके सापेक्ष घनत्व में समानुपातिक वृद्धि अनुमन्य होगी। इसके अतिरिक्त बेसिक एफ.ए.आर. पर नियमानुसार कय-योग्य एफ.ए.आर. भी अनुमन्य होगा।</li>
                    <li>आवासीय पुनर्विकास योजना में व्यवसायिक उपयोग हेतु अनुमन्य सीमा से 5 प्रतिशत अतिरिक्त क्षेत्रफल अनुमन्य होगा।</li>
                    <li>यौजना अनुमोदन हेतु &apos;सिंगल विन्डो क्लीयरेन्स&apos; व्यवस्था सुनिश्चित की जाएगी।</li>
                </List>

                <SectionTitle>10. हाउसिंग सोसायटी / अपार्टमेन्ट ऑनर्स एसोसिएशन की भूमिकाः</SectionTitle>
                <List ordered>
                    <li>पुनर्विकास योजना हेतु एसोसिएशन के सदस्यों से सहमति प्राप्त करने की कार्यवाही सुनिश्चित की जाएगी।</li>
                    <li>यौजना की डिटेल्ड प्रोजेक्ट रिपोर्ट तैयार करने हेतु प्रोजेक्ट मैनेजमेन्ट कन्सलटेन्ट नियुक्त किया जा सकता है।</li>
                    <li>कार्यान्वयन एजेंसी के चयन हेतु मानक प्रक्रिया निर्धारित की जायेगी, जिस पर एसोसिएशन के दो-तिहाई सदस्यों की सहमति प्राप्त की जाएगी।</li>
                    <li>पुनर्विकास योजना के सम्बन्ध में समस्त सूचनायें एवं विवरण यथा-बैठक के आयोजन की तिथि एवं उसके निर्णय और योजना की प्रगति, आदि से सम्बन्धित विवरण नियमित रूप से हाउसिंग सोसायटी/अपार्टमेन्ट ऑनर्स एसोसिएशन के समस्त सदस्यों को उपलब्ध कराया जायेगा।</li>
                    <li>योजना के विद्यमान स्वरूप के सम्बन्ध में वांछित समस्त अभिलेख एवं दस्तावेज कार्यान्वयन एजेन्सी को आवश्यकतानुसार उपलब्ध कराये जाएंगे तथा एसोसिएशन के सदस्यों के साथ कन्सलटेशन की प्रकिया में पूर्ण सहयोग प्रदान किया जाएगा।</li>
                </List>

                <SectionTitle>11. संस्थागत व्यवस्थाः</SectionTitle>
                <List ordered>
                    <li>पुनर्विकास योजना का कियान्वयन शासकीय अभिकरणों (विकास प्राधिकरण, उत्तर प्रदेश आवास एवं विकास परिषद, विशेष क्षेत्र विकास प्राधिकरण, नियन्त्रक प्राधिकारी विनियमित क्षेत्र), सार्वजनिक-निजी सहभागिता, निजी विकासकर्ता अथवा हाउसिंग सोसायटी /अपार्टमेन्ट ऑनर्स एसोसिएशन के माध्यम से किया जा सकेगा।</li>
                    <li>योजना के अनुश्रवण तथा विभिन्न विभागों / संस्थाओं के मध्य समन्वय हेतु आवास बन्धु, उत्तर प्रदेश, राज्य स्तर पर नोडल एजेन्सी होगी।</li>
                    <li>नीति से सम्बन्धित विषयों पर मार्गदर्शन प्रदान करने हेतु राज्य स्तर पर प्रमुख सचिव, आवास एवं शहरी नियोजन विभाग, उत्तर प्रदेश शासन की अध्यक्षता में एक अन्तर्विभागीय समिति का गठन किया जायेगा।</li>
                    <li>नीति के क्रियान्वयन में उत्पन्न व्यवहारिक कठिनाईयों के निराकरण हेतु स्थानीय स्तर पर उपाध्यक्ष, विकास प्राधिकरण/आवास आयुक्त, उत्तर प्रदेश आवास एवं विकास परिषद्/अध्यक्ष, विशेष क्षेत्र विकास प्राधिकरण / अध्यक्ष, नियन्त्रक प्राधिकारी विनियमित क्षेत्र की अध्यक्षता में एक समिति का गठन किया जाएगा, जिसमें सम्बन्धित विभागों के प्रतिनिधि सदस्य होंगे।</li>
                </List>

                <Paragraph>3- इस संबंध में मुझे यह कहने का निदेश हुआ है कि कृपया उत्तर प्रदेश शहरी पुनर्विकास नीति, 2026 के प्राविधानों का तत्काल प्रभाव व कड़ाई से अनुपालन सुनिश्चित कराने का कष्ट करें।</Paragraph>

                <div className="mt-12 text-right">
                    <p className="font-bold">भवदीय,</p>
                    <div className="mt-4 inline-block text-left">
                        <p className="text-sm italic text-slate-500 border border-slate-300 px-2 py-1 bg-slate-50 rounded">Digitally signed by<br />GURU PRASAD PORALA<br />10:37:51 (2026)</p>
                        <p className="font-bold mt-2">प्रमुख सचिव।</p>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-300 text-sm">
                    <p className="font-bold mb-4">प्रतिलिपि निम्नलिखित को सूचनार्थ एवं आवश्यक कार्यवाही हेतु प्रेषित-</p>
                    <List ordered>
                        <li>अपर मुख्य सचिव, मा० मुख्यमंत्री, उत्तर प्रदेश शासन।</li>
                        <li>प्रमुख स्टाफ आफिसर, मुख्य सचिव, उत्तर प्रदेश शासन।</li>
                        <li>अवस्थापना एवं औद्योगिक विकास आयुक्त, उत्तर प्रदेश।</li>
                        <li>समस्त अपर मुख्य सचिव / प्रमुख सचिव / सचिव, उत्तर प्रदेश शासन।</li>
                        <li>आयुक्त एवं सचिव, राजस्व परिषद, उत्तर प्रदेश।</li>
                        <li>महानिरीक्षक, निबन्धन, उत्तर प्रदेश।</li>
                        <li>मण्डलायुक्त, समस्त मण्डल, उत्तर प्रदेश।</li>
                        <li>जिलाधिकारी, समस्त उत्तर प्रदेश।</li>
                        <li>अध्यक्ष, समस्त विशेष क्षेत्र विकास प्राधिकरण, उत्तर प्रदेश।</li>
                        <li>जिलाधिकारी / नियंत्रक प्राधिकारी, समस्त विनियमित क्षेत्र, उत्तर प्रदेश।</li>
                        <li>सचिव, उ०प्र० भू-सम्पदा विनियामक प्राधिकरण, लखनऊ।</li>
                        <li>रजिस्ट्रार उ०प्र० भू-सम्पदा अपीलीय अधिकरण, लखनऊ।</li>
                        <li>मुख्य कार्यपालक अधिकारी, समस्त औद्योगिक विकास प्राधिकरण, उत्तर प्रदेश।</li>
                        <li>मुख्य नगर एवं ग्राम नियोजक, नगर एवं ग्राम नियोजन विभाग, उ०प्र० लखनऊ।</li>
                        <li>निदेशक, आवास बन्धु, उ०प्र०, लखनऊ को इस निर्देश के साथ कि कृपया शासनादेश की प्रति आवास एवं शहरी नियोजन विभाग की वेबसाइट पर तत्काल अपलोड कराने का कष्ट करें।</li>
                        <li>समस्त अनुभाग, आवास एवं शहरी नियोजन विभाग, उ०प्र० शासन।</li>
                        <li>गार्ड फाईल ।</li>
                    </List>

                    <div className="mt-8 text-right">
                        <p className="font-bold">आज्ञा से,</p>
                        <p className="font-bold mt-4">पी० गुरूप्रसाद</p>
                        <p>प्रमुख सचिव।</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

// --- UTILITY COMPONENTS (Insights/Simulators) ---

function ProgressBar({ label, percentage, color }) {
    return (
        <div>
            <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-slate-700">{label}</span>
                <span className="font-black text-slate-900">{percentage}% Waived</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3 shadow-inner">
                <div className={`h-3 rounded-full ${color} shadow-sm`} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
}

function ResultBox({ label, value, highlight = false, color = "text-slate-900" }) {
    return (
        <div className={`p-4 rounded-2xl border ${highlight ? 'bg-gradient-to-br from-indigo-600 to-blue-600 border-indigo-500 shadow-lg transform scale-105' : 'bg-slate-50 border-slate-200'}`}>
            <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${highlight ? 'text-indigo-200' : 'text-slate-500'}`}>{label}</div>
            <div className={`text-xl lg:text-2xl font-black ${highlight ? 'text-white' : color}`}>{value}</div>
        </div>
    );
}

function CityAnimation() {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStage((prev) => (prev + 1) % 2);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-72 h-72 bg-gradient-to-t from-slate-200 to-blue-50 rounded-full border-8 border-white shadow-2xl flex items-end justify-center p-8 relative overflow-hidden">
            {/* Sun/Moon */}
            <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.8)]"></div>

            {/* Old Buildings */}
            <div className={`absolute bottom-8 flex items-end space-x-3 transition-all duration-1000 ${stage === 1 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
                <div className="w-12 h-20 bg-slate-400 rounded-sm shadow-inner flex flex-col justify-end p-1 space-y-1 opacity-80"><div className="w-full h-2 bg-slate-500 rounded"></div></div>
                <div className="w-16 h-16 bg-slate-500 rounded-sm shadow-inner flex flex-col justify-end p-1 opacity-80"><div className="w-full h-2 bg-slate-600 rounded"></div></div>
                <div className="w-10 h-24 bg-slate-400 rounded-sm shadow-inner opacity-80"></div>
            </div>

            {/* New Buildings (Redeveloped) */}
            <div className={`absolute bottom-8 flex items-end space-x-3 transition-all duration-1000 delay-300 ${stage === 0 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
                <div className="w-14 h-32 bg-blue-500 rounded-t-lg shadow-lg relative overflow-hidden">
                    <div className="absolute top-2 left-2 right-2 h-4 bg-blue-300 rounded opacity-50"></div>
                </div>
                <div className="w-20 h-44 bg-indigo-600 rounded-t-lg shadow-2xl relative overflow-hidden border-t-4 border-indigo-400">
                    <div className="absolute top-3 left-3 w-4 h-4 bg-indigo-300 rounded-sm opacity-60"></div>
                    <div className="absolute top-3 right-3 w-4 h-4 bg-indigo-300 rounded-sm opacity-60"></div>
                    <div className="absolute top-10 left-3 w-4 h-4 bg-indigo-300 rounded-sm opacity-60"></div>
                    <div className="absolute top-10 right-3 w-4 h-4 bg-indigo-300 rounded-sm opacity-60"></div>
                </div>
                <div className="w-12 h-28 bg-emerald-500 rounded-t-lg shadow-lg relative flex justify-center">
                    <Trees className="w-6 h-6 text-white absolute top-4 opacity-80" />
                </div>
            </div>

            <div className="absolute bottom-4 text-xs font-black text-slate-600 bg-white px-4 py-2 rounded-full shadow-lg">
                {stage === 0 ? "Dilapidated State" : "Redeveloped (+1.0 FAR)"}
            </div>
        </div>
    );
}