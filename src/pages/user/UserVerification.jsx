import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { verifyUserLinkAction } from "../../features/users/userAction";

const UserVerification = () => {
  const [searchParams] = useSearchParams();
  const c = searchParams.get("");

  console.log(c, e);

  const shouldCall = useRef(true);

  useEffect(() => {
    if (shouldCall.current) {
      const getServerResponse = () => {
        verifyUserLinkAction({ c, e });
      };

      verifyUserLinkAction({ c, e });
      shouldCall.current = false;
    }
  }, [searchParams, c, e]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="d-flex justify-content-center align-items-center">
        <Spinner variant=" primary" className="fs-1" />

        <div>Please wait while we are verifying your link ...</div>
        <div>Working</div>
      </div>
    </div>
  );
};
export default UserVerification;
