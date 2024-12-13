import { useState } from "react";
import {
  FaChartLine,
  FaMoneyBillWave,
  FaClipboardList,
  FaExchangeAlt,
  FaBuilding,
  FaChartBar,
} from "react-icons/fa";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("fixedIncome");

  const tabs = [
    {
      id: "fixedIncome",
      label: "Fixed Income Portfolio Management",
      icon: <FaChartLine />,
    },
    {
      id: "cashManagement",
      label: "Cash Management",
      icon: <FaMoneyBillWave />,
    },
    {
      id: "investmentAdvisory",
      label: "Investment Advisory Services",
      icon: <FaClipboardList />,
    },
    {
      id: "alternativeTrading",
      label: "Alternative Trading Platform",
      icon: <FaExchangeAlt />,
    },
    { id: "propertyFund", label: "Property Fund", icon: <FaBuilding /> },
    {
      id: "stockMarket",
      label: "Stock Market Portfolio",
      icon: <FaChartBar />,
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "fixedIncome":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Fixed Income Portfolio Management
            </h1>
            <ul className="list-disc list-inside space-y-2">
              <li>
                We provide fixed income investments that pay a return on a fixed
                schedule.
              </li>
              <li>
                In our fixed income portfolio fund, we bundle different fixed
                income securities that are sold to the investors. These include:
                <ul className="list-disc list-inside ml-6">
                  <li>Bond funds</li>
                  <li>Certificates of Deposits</li>
                  <li>Treasury bills</li>
                  <li>Money market funds</li>
                  <li>Currency-related instruments</li>
                  <li>Derivatives fixed income instruments</li>
                </ul>
              </li>
              <li>
                Our mandate is to meet clients’ current income and investment
                growth needs.
              </li>
              <li>
                Whatever the market conditions, at Purpose Vunani Asset
                Management, we seek to:
                <ul className="list-disc list-inside ml-6">
                  <li>
                    Provide superior and consistent investment performance
                  </li>
                  <li>
                    Develop a wide range of products to meet the diverse needs
                    of our customers
                  </li>
                  <li>Provide the highest quality customer service</li>
                  <li>Ensure regulatory compliance</li>
                </ul>
              </li>
              <li>
                The treasury team manages the placing of fixed-term deposits on
                behalf of clients.
              </li>
              <li>
                We carry out extensive market research on all banks that we
                invest with, together with background checks on senior
                personnel. We only deal with selected banks who meet our
                criteria.
              </li>
              <li>
                Our treasury team reviews all maturing deposits and obtains
                indicative interest rates from a number of selected banks before
                recommending the renewal of a maturity.
              </li>
              <li>
                The pooling effect and dealing directly with the banks’ treasury
                departments enables Purpose Vunani to pass on competitive money
                market pricing, whilst obtaining appropriate security as cover
                for the deposits from each bank, which means every deposit is
                secured appropriately.
              </li>
              <li>
                Counter-party credit risk is continuously monitored, and cash
                portfolio reports are produced on a regular basis.
              </li>
            </ul>
          </div>
        );
      case "cashManagement":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Cash Management and Outsource Treasury Solutions
            </h1>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Our treasury team enables clients to eliminate or minimize idle
                cash in bank accounts whilst generating returns on those funds.
                Cash can be invested across a number of institutions in a
                variety of terms, dependent on the client liquidity
                requirements.
              </li>
              <li>
                The fixed deposits or notice accounts can range from 7–14 days
                to 90 days and beyond.
              </li>
              <li>
                Our treasury team reviews all maturing deposits, selects
                institutions that meet our criteria before a renewal of a
                maturity.
              </li>
              <li>
                Our relationship with various Treasury Departments enables us to
                negotiate competitive money market pricing, while the pooling
                effect aids in obtaining appropriate security as cover for the
                deposits from each bank, ensuring every deposit is secured
                appropriately.
              </li>
              <li>
                Counterparty credit risk assessment is carried out continuously,
                and portfolio reports are produced on a regular basis.
              </li>
            </ul>
          </div>
        );
      case "investmentAdvisory":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Investment Advisory Services
            </h1>
            <ul className="list-disc list-inside space-y-2">
              <li>
                PVAM provides financial restructuring and operational
                restructuring services to both government and corporates.
              </li>
              <li>Facilitates capital raising activities for corporates.</li>
              <li>Offers wealth planning for individuals.</li>
            </ul>
          </div>
        );
      case "alternativeTrading":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Alternative Trading Platform (ATP) Investment Services and
              Management
            </h1>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Through FINSEC, we provide Alternative Trading Platform services
                for our clients, facilitating electronic trading of a wide
                variety of securities, including:
                <ul className="list-disc list-inside ml-6">
                  <li>Municipal bonds</li>
                  <li>Debt instruments</li>
                  <li>Exchange-traded funds (ETFs)</li>
                  <li>Commodities</li>
                </ul>
              </li>
              <li>
                This platform formalizes marginalized market segments and brings
                all alternative trading activities onto a central and organized
                marketplace.
              </li>
              <li>
                We help our clients easily mobilize capital for medium and
                long-term investments.
              </li>
            </ul>
          </div>
        );
      case "propertyFund":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Property Fund</h1>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Purpose Vunani Asset Management specializes in developing and
                managing property funds for institutional and retail investors.
              </li>
              <li>
                On behalf of our clients, we extensively source and manage
                property investment opportunities.
              </li>
              <li>
                The funds generated from the sale of investment units on behalf
                of our clients are:
                <ul className="list-disc list-inside ml-6">
                  <li>Reinvested in the property fund.</li>
                  <li>
                    Used to purchase or lease more residential and commercial
                    properties and developments for the fund.
                  </li>
                </ul>
              </li>
              <li>
                In addition to this, the rental or sale fees generated from the
                fund’s properties are also distributed to the investors.
              </li>
            </ul>
          </div>
        );
      case "stockMarket":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Stock Market Portfolio Management
            </h1>
            <ul className="list-disc list-inside space-y-2">
              <li>
                We have an experienced investment team backed by comprehensive
                equity analysts.
              </li>
              <li>
                We have access to one of the top investment teams in South
                Africa, Vunani Fund Managers, and leverage their expert
                knowledge to supplement ours.
              </li>
              <li>
                We are informed and guided by the mandate that we are given and
                will always work within the given mandate.
              </li>
              <li>
                Our strongest quality is our discipline of adhering to our
                investment processes and philosophy.
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="md:flex">
      <ul className="p-2 space-y-2">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab.id);
              }}
              className={`inline-flex items-center px-4 py-2 rounded-lg w-full ${
                activeTab === tab.id
                  ? "text-white bg-teal-700 "
                  : "bg-gray-100 hover:bg-amber-600 hover:text-white transition duration-300  "
              }`}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              <span
                className={`w-4 h-4 me-2 ${
                  activeTab === tab.id ? "text-white" : "text-black"
                }`}
              >
                {tab.icon}
              </span>
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="p-6  bg-teal-50 text-medium text-gray-500 rounded-lg w-full">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabsComponent;
