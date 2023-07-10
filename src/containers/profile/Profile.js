import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  function setrepoFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw new Error("Error fetching repo data");
        })
        .then(response => {
          const pinnedItems = response?.data?.user?.pinnedItems?.edges;
          if (pinnedItems) {
            setrepoFunction(pinnedItems);
          } else {
            throw new Error("Missing pinnedItems data");
          }
        })
        .catch(function (error) {
          console.error(
            `${error.message} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setrepoFunction([]);
        });
    };
    getRepoData();
  }, []);

  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
