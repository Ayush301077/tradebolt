package com.ayush.tradebolt.repository;

import com.ayush.tradebolt.Modal.VerificationCode;
import org.hibernate.sql.ast.tree.expression.JdbcParameter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Long> {
    public VerificationCode findByUserId(Long userId);
}
