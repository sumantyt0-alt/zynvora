import Certificate from "../models/Certificate.js";
import { v4 as uuid } from "uuid";
import PDFDocument from "pdfkit";
import Progress from "../models/Progress.js";

export const generateCertificate = async (req, res) => {
  try {
    const { courseId } = req.body;
    const progress = await Progress.findOne({
      user:req.user.id,
      course: courseId,
    });

    if (!progress || progress.progress < 100) {
      return res.status(400).json({
        success: false,
        message: "Complete the course to unlock certificate",
      });
    }

    const existing = await Certificate.findOne({
      student: req.user.id,
      course: courseId,
    });

    if (existing) {
      return res.status(200).json({
        success: true,
        certificate: existing,
      });
    }

    const certificate = await Certificate.create({
      certificateId: `ZYN-${uuid().slice(0, 8).toUpperCase()}`,
      student: req.user.id,
      course: courseId,
    });

    res.status(201).json({
      success: true,
      certificate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const downloadCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id)
      .populate("student")
      .populate("course");

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found",
      });
    }

    const doc = new PDFDocument();

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${certificate.certificateId}.pdf`
    );

    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);

    doc
      .fontSize(28)
      .text("ZYNVORA", {
        align: "center",
      });

    doc.moveDown();

    doc
      .fontSize(22)
      .text("Certificate of Completion", {
        align: "center",
      });

    doc.moveDown(2);

    doc.fontSize(16).text("This Certificate is proudly presented to", {
      align: "center",
    });

    doc.moveDown();

    doc
      .fontSize(26)
      .fillColor("blue")
      .text(certificate.student.name, {
        align: "center",
      });

    doc.moveDown();

    doc
      .fillColor("black")
      .fontSize(16)
      .text("For successfully completing", {
        align: "center",
      });

    doc.moveDown();

    doc
      .fontSize(22)
      .text(certificate.course.title, {
        align: "center",
      });

    doc.moveDown(2);

    doc.fontSize(14).text(
      `Instructor: ${certificate.course.instructor}`
    );

    doc.text(
      `Issued: ${new Date(
        certificate.completedAt
      ).toLocaleDateString()}`
    );

    doc.text(
      `Certificate ID: ${certificate.certificateId}`
    );

    doc.end();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};