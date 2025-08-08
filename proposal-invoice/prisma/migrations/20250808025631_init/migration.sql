-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyName" TEXT NOT NULL,
    "logoUrl" TEXT,
    "colorPrimary" TEXT NOT NULL DEFAULT '#2563EB',
    "colorSecondary" TEXT NOT NULL DEFAULT '#0EA5E9',
    "colorAccent" TEXT NOT NULL DEFAULT '#F59E0B',
    "colorNeutral" TEXT NOT NULL DEFAULT '#111827',
    "emailFrom" TEXT,
    "address" TEXT,
    "website" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Template" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "cover" TEXT,
    "intro" TEXT NOT NULL,
    "scope" TEXT NOT NULL,
    "timeline" TEXT NOT NULL,
    "deliverables" TEXT NOT NULL,
    "terms" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Proposal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "intro" TEXT NOT NULL,
    "scope" TEXT NOT NULL,
    "timeline" TEXT NOT NULL,
    "deliverables" TEXT NOT NULL,
    "terms" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "total" REAL NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Proposal_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientId" TEXT NOT NULL,
    "proposalId" TEXT,
    "issueDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'unpaid',
    "subtotal" REAL NOT NULL,
    "tax" REAL NOT NULL,
    "total" REAL NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Invoice_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Invoice_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LineItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "invoiceId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "unitPrice" REAL NOT NULL,
    "total" REAL NOT NULL,
    CONSTRAINT "LineItem_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_proposalId_key" ON "Invoice"("proposalId");
