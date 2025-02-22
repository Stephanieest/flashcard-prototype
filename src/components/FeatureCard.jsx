"use client"

import { motion } from "framer-motion"
import PropTypes from "prop-types"
import { Card, CardContent, Typography } from "@mui/material"

export default function FeatureCard({ Icon, title, description }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }}>
      <Card
        sx={{
          bgcolor: "background.paper",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: (theme) =>
              theme.palette.mode === "dark"
                ? "0 0 0 1px rgba(59, 130, 246, 0.5)"
                : "0 0 0 1px rgba(152, 245, 225, 0.5)",
          },
        }}
      >
        <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <div
            style={{
              backgroundColor: "#3b82f6",
              padding: "10px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
            }}
          >
            <Icon
              className="w-5 h-5"
              style={{
                color: "#ffffff",
                strokeWidth: 2.5,
              }}
            />
          </div>
          <Typography
            variant="h6"
            sx={{
              color: "text.primary",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  )
}

FeatureCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

