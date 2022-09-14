import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);
  useEffect(() => {
    if (!user) {
      navigate("/landing");
    }
  }, [user, navigate]);

  return children;
}

export default ProtectedRoute;
