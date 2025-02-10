import React, { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";
import { TabWrapper, TabHeader, Tab, ActiveComponentWrapper } from "./Style";

function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabState, setTabState] = useState({});
  const [error, setError] = useState({});
  const tabsConfig = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveComponent = tabsConfig[activeTab].component;

  const validation = (tabKey, e, key) => {
    if (
      key === "firstName" ||
      key === "lastName" ||
      key === "hobbies" ||
      key === "newPassword"
    ) {
      if (e.target.value.length < 2) {
        setError((prevError) => ({
          ...prevError,
          [tabKey]: {
            ...prevError.tabKey,
            [key]: "Length should atleast more than 2 size",
          },
        }));
      } else {
        setError((prevError) => {
          const newError = { ...prevError };

          // Delete the key from the nested object
          if (newError[tabKey]) {
            delete newError[tabKey][key];

            // If the inner object becomes empty, remove the tabKey as well
            // if (Object.keys(newError[tabKey]).length === 0) {
            //   delete newError[tabKey];
            // }
          }

          return newError;
        });
      }
    } else if (key === "email") {
      var re = /\S+@\S+\.\S+/;
      if (!re.test(e.target.value)) {
        setError((prevError) => ({
          ...prevError,
          [tabKey]: {
            ...prevError.tabKey,
            [key]: "Email is invalid",
          },
        }));
      } else {
        setError((prevError) => {
          const newError = { ...prevError };

          if (newError[tabKey]) {
            delete newError[tabKey][key];
          }
          return newError;
        });
      }
    } else if (key === "confirmPassword") {
      if (e.target.value !== tabState?.settings?.newPassword) {
        setError((prevError) => ({
          ...prevError,
          [tabKey]: {
            ...prevError[tabKey],
            [key]: "Confirm password should match with new password",
          },
        }));
      } else {
        setError((prevError) => {
          const newError = { ...prevError };

          if (newError[tabKey]) {
            delete newError[tabKey][key];
          }

          return newError;
        });
      }
    }
  };

  const handleTabState = (tabKey, e, key) => {
    validation(tabKey, e, key);
    setTabState((prevState) => ({
      ...prevState,
      [tabKey]: {
        ...prevState[tabKey],
        [key]: e.target.value,
      },
    }));
  };

  const hanldeSubmit = () => {
    let isError = false;
    Object.keys(error).forEach((e) => {
      if (Object.keys(e).length !== 0) isError = true;
    });
    if (isError) {
      alert("Please fix the errors");
      return;
    }
    alert("result submitted successfully");
    setTabState({});
    setActiveTab(0);
  };

  const handleTab = (index, name) => {
    // if (Object.keys(name).length !== 0) {
    //   return;
    // }
    setActiveTab(index);
  };

  return (
    <>
      Tab Component
      <TabWrapper>
        <TabHeader>
          {tabsConfig.map((tab, index) => {
            return (
              <Tab onClick={() => handleTab(index, tab?.name)}>{tab.name}</Tab>
            );
          })}
        </TabHeader>
        <ActiveComponentWrapper>
          <ActiveComponent
            handleTabState={handleTabState}
            tabState={tabState}
            error={error}
            hanldeSubmit={hanldeSubmit}
          />
        </ActiveComponentWrapper>
      </TabWrapper>
    </>
  );
}

export default TabComponent;
